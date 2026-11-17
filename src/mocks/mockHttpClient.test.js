import mock, { resetMockState, setMockLatency } from './mockHttpClient';

beforeEach(() => {
  setMockLatency(0);
  resetMockState();
});

const fail = async (p) => {
  try {
    await p;
  } catch (e) {
    return e;
  }
  throw new Error('expected rejection');
};

describe('mockHttpClient', () => {
  test('login returns the shape the UI parses, any password', async () => {
    const res = await mock.post('/login', { email: 'demo@example.com', password: 'x' });
    expect(res.status).toBe(200);
    expect(res.data.value).toEqual(expect.objectContaining({ access_token: expect.any(String), user_role: 'user' }));
    const admin = await mock.post('/login', { email: 'admin-demo@example.com', password: '' });
    expect(admin.data.value.user_role).toBe('super_admin');
  });

  test('unknown login rejects with an axios-like 404', async () => {
    const err = await fail(mock.post('/login', { email: 'nobody@example.com', password: 'x' }));
    expect(err.response.status).toBe(404);
    expect(err.response.data.message).toBeDefined();
  });

  test('register adds an in-memory user, duplicates and missing fields are rejected', async () => {
    const body = { firstName: 'A', lastName: 'B', email: 'new@example.com', password: 'pw' };
    const res = await mock.post('/users', body);
    expect(res.status).toBe(201);
    expect((await mock.get('/users')).data.some((u) => u.email === 'new@example.com')).toBe(true);
    expect((await mock.post('/login', { email: 'new@example.com', password: 'pw' })).data.value.user_role).toBe('user');
    expect((await fail(mock.post('/users', body))).response.status).toBe(409);
    expect((await fail(mock.post('/users', {}))).response.status).toBe(400);
  });

  test('lists employees, services and bookings', async () => {
    expect((await mock.get('/employees')).data.length).toBeGreaterThan(0);
    expect((await mock.get('/stylings')).data[0]).toEqual(expect.objectContaining({ style: expect.any(String), cost: expect.anything() }));
    expect((await mock.get('/booking')).data.length).toBeGreaterThan(0);
    expect((await mock.get('/employee/101')).data.id).toBe(101);
    expect(Array.isArray((await mock.get('/employee_service/101')).data)).toBe(true);
    expect((await fail(mock.get('/employee/9999'))).response.status).toBe(404);
  });

  test('service create / edit / delete round trip', async () => {
    const before = (await mock.get('/stylings')).data.length;
    const created = (await mock.post('/stylings', { style: 'Test Style', cost: '100', duration: '1', description: 'd' })).data;
    expect((await mock.get('/stylings')).data).toHaveLength(before + 1);
    const edited = (await mock.put(`/stylings/${created.id}`, { cost: '250' })).data;
    expect(edited.cost).toBe('250');
    expect((await mock.get('/stylings')).data.find((s) => s.id === created.id).cost).toBe('250');
    await mock.delete(`/stylings/${created.id}`);
    expect((await mock.get('/stylings')).data).toHaveLength(before);
    expect((await fail(mock.delete(`/stylings/${created.id}`))).response.status).toBe(404);
  });

  test('booking create validates input', async () => {
    const before = (await mock.get('/booking')).data.length;
    const res = await mock.post('/booking', { employee_id: 101, service_id: 1, date: '2030-05-01' });
    expect(res.status).toBe(201);
    expect((await mock.get('/booking')).data).toHaveLength(before + 1);
    expect((await fail(mock.post('/booking', { employee_id: 101 }))).response.status).toBe(400);
  });

  test('role promotion and unknown endpoints', async () => {
    const res = await mock.put('/admin/3');
    expect(res.data.user_role).toBe('admin');
    expect((await mock.put('/super_admin/3')).data.user_role).toBe('super_admin');
    expect((await fail(mock.put('/admin/9999'))).response.status).toBe(404);
    expect((await fail(mock.get('/nope'))).response.status).toBe(404);
  });

  test('returned data is a copy (mutating it does not change state)', async () => {
    const { data } = await mock.get('/stylings');
    data.length = 0;
    expect((await mock.get('/stylings')).data.length).toBeGreaterThan(0);
  });
});

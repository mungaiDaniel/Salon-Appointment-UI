import { attachInterceptors } from './httpClient';

const makeInstance = () => {
  const inst = { interceptors: { request: { use: jest.fn() }, response: { use: jest.fn() } } };
  attachInterceptors(inst);
  return {
    onRequest: inst.interceptors.request.use.mock.calls[0][0],
    onRejected: inst.interceptors.response.use.mock.calls[0][1],
  };
};

beforeEach(() => localStorage.clear());

describe('httpClient interceptors', () => {
  test('adds Bearer token when present', () => {
    localStorage.setItem('access_token', 'abc');
    const { onRequest } = makeInstance();
    expect(onRequest({ headers: {} }).headers.Authorization).toBe('Bearer abc');
  });

  test('does not override an explicit Authorization header or add one without a token', () => {
    const { onRequest } = makeInstance();
    expect(onRequest({ headers: {} }).headers.Authorization).toBeUndefined();
    localStorage.setItem('access_token', 'abc');
    expect(onRequest({ headers: { Authorization: 'Bearer other' } }).headers.Authorization).toBe('Bearer other');
  });

  test('401 on a non-login request clears the session', async () => {
    localStorage.setItem('access_token', 'abc');
    localStorage.setItem('user_role', 'user');
    const { onRejected } = makeInstance();
    await expect(onRejected({ response: { status: 401 }, config: { url: '/users' } })).rejects.toBeDefined();
    expect(localStorage.getItem('access_token')).toBeNull();
    expect(localStorage.getItem('user_role')).toBeNull();
  });

  test('401 on /login or other statuses keep the session', async () => {
    localStorage.setItem('access_token', 'abc');
    const { onRejected } = makeInstance();
    await expect(onRejected({ response: { status: 401 }, config: { url: '/login' } })).rejects.toBeDefined();
    await expect(onRejected({ response: { status: 500 }, config: { url: '/users' } })).rejects.toBeDefined();
    expect(localStorage.getItem('access_token')).toBe('abc');
  });
});

import { seedUsers, seedEmployees, seedServices, seedBookings } from "./seedData";

// In-memory state; resets on page reload (or resetMockState()).
let state;
let latency = 200;

export const resetMockState = () => {
  state = {
    users: seedUsers(),
    employees: seedEmployees(),
    services: seedServices(),
    bookings: seedBookings(),
    nextId: { users: 100, services: 100, bookings: 100 },
  };
};
resetMockState();

export const setMockLatency = (ms) => {
  latency = ms;
};

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.response = { status, data: { message } };
    this.isAxiosError = true;
  }
}

const clone = (v) => JSON.parse(JSON.stringify(v));
const ok = (data, status = 200) => ({ data: clone(data), status });
const idOf = (s) => Number(s);

const findOr404 = (list, id, what) => {
  const item = list.find((x) => x.id === idOf(id));
  if (!item) throw new HttpError(404, `${what} not found`);
  return item;
};

// Each route: [method, regex, handler(match, body)]
const routes = [
  ["post", /^\/login$/, (_m, body = {}) => {
    const user = state.users.find(
      (u) => u.email.toLowerCase() === String(body.email || "").toLowerCase()
    );
    if (!user) throw new HttpError(404, "User not found");
    return ok({
      value: {
        access_token: `demo-token-${user.user_role}`,
        user_role: user.user_role,
        user: { id: user.id, firstName: user.firstName, email: user.email },
      },
    });
  }],
  ["post", /^\/users$/, (_m, body = {}) => {
    const { firstName, lastName, email, password } = body;
    if (!firstName || !lastName || !email || !password) {
      throw new HttpError(400, "firstName, lastName, email and password are required");
    }
    if (state.users.some((u) => u.email.toLowerCase() === String(email).toLowerCase())) {
      throw new HttpError(409, "Email already registered");
    }
    const user = {
      id: state.nextId.users++,
      firstName,
      lastName,
      email,
      phoneNumber: body.phoneNumber || "",
      location: body.location || "",
      user_role: "user",
    };
    state.users.push(user);
    return ok(user, 201);
  }],
  ["get", /^\/users$/, () => ok(state.users)],
  ["get", /^\/employees$/, () => ok(state.employees)],
  ["get", /^\/employee\/(\d+)$/, (m) => ok(findOr404(state.employees, m[1], "Employee"))],
  // Services an employee performs; the demo salon offers every service to every stylist.
  ["get", /^\/employee_service\/(\d+)$/, (m) => {
    findOr404(state.employees, m[1], "Employee");
    return ok(state.services);
  }],
  ["get", /^\/stylings$/, () => ok(state.services)],
  ["post", /^\/stylings$/, (_m, body = {}) => {
    if (!body.style) throw new HttpError(400, "style is required");
    const service = {
      id: state.nextId.services++,
      style: body.style,
      description: body.description || "",
      duration: body.duration || "",
      cost: body.cost || "",
    };
    state.services.push(service);
    return ok(service, 201);
  }],
  ["put", /^\/stylings\/(\d+)$/, (m, body = {}) => {
    const service = findOr404(state.services, m[1], "Service");
    ["style", "description", "duration", "cost"].forEach((k) => {
      if (body[k] !== undefined) service[k] = body[k];
    });
    return ok(service);
  }],
  ["delete", /^\/stylings\/(\d+)$/, (m) => {
    const service = findOr404(state.services, m[1], "Service");
    state.services = state.services.filter((s) => s !== service);
    return ok({ message: "Service deleted" });
  }],
  ["post", /^\/booking$/, (_m, body = {}) => {
    const { employee_id, service_id, date } = body;
    if (!employee_id || !service_id || !date) {
      throw new HttpError(400, "employee_id, service_id and date are required");
    }
    findOr404(state.employees, employee_id, "Employee");
    findOr404(state.services, service_id, "Service");
    const booking = {
      id: state.nextId.bookings++,
      user_id: 1,
      employee_id: idOf(employee_id),
      service_id: idOf(service_id),
      date,
      status: "pending",
    };
    state.bookings.push(booking);
    return ok(booking, 201);
  }],
  ["get", /^\/booking$/, () => ok(state.bookings)],
  ["put", /^\/(admin|super_admin)\/(\d+)$/, (m) => {
    const user = findOr404(state.users, m[2], "User");
    user.user_role = m[1];
    return ok(user);
  }],
];

const request = (method, url, body) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const path = String(url).split("?")[0].replace(/\/+$/, "") || "/";
      const route = routes.find(([m, re]) => m === method && re.test(path));
      try {
        if (!route) throw new HttpError(404, `No demo endpoint for ${method.toUpperCase()} ${path}`);
        resolve(route[2](path.match(route[1]), body));
      } catch (e) {
        reject(e);
      }
    }, latency);
  });

const mockHttpClient = {
  get: (url) => request("get", url),
  delete: (url) => request("delete", url),
  post: (url, data) => request("post", url, data),
  put: (url, data) => request("put", url, data),
};

export default mockHttpClient;

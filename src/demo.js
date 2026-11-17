// Demo mode: when REACT_APP_DEMO_MODE=true the app talks to an in-memory
// mock API (see src/mocks) and never makes a network request.
export const isDemoMode = () => process.env.REACT_APP_DEMO_MODE === "true";

export const DEMO_ACCOUNTS = {
  user: "demo@example.com",
  admin: "admin-demo@example.com",
};

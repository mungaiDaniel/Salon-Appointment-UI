// Clearly fake seed data for demo mode. All emails use example.com and phone
// numbers use the reserved 555-01xx range (stored numerically, like the API).

export const seedUsers = () => [
  { id: 1, firstName: "Demo", lastName: "User", email: "demo@example.com", phoneNumber: 5550101, location: "Demo City", user_role: "user" },
  { id: 2, firstName: "Demo", lastName: "Admin", email: "admin-demo@example.com", phoneNumber: 5550102, location: "Demo City", user_role: "super_admin" },
  { id: 3, firstName: "Sample", lastName: "Client", email: "client@example.com", phoneNumber: 5550103, location: "Sample Town", user_role: "user" },
];

export const seedEmployees = () => [
  { id: 101, firstName: "Demo Stylist A", lastName: "Sample", email: "stylist-a@example.com", phoneNumber: 5550111, location: "Demo Salon", user_role: "employee" },
  { id: 102, firstName: "Demo Stylist B", lastName: "Sample", email: "stylist-b@example.com", phoneNumber: 5550112, location: "Demo Salon", user_role: "employee" },
  { id: 103, firstName: "Demo Stylist C", lastName: "Sample", email: "stylist-c@example.com", phoneNumber: 5550113, location: "Demo Salon", user_role: "employee" },
];

export const seedServices = () => [
  { id: 1, style: "Haircut", description: "Wash, cut and style (demo data)", duration: 1, cost: 1500 },
  { id: 2, style: "Colour", description: "Full colour treatment (demo data)", duration: 3, cost: 5000 },
  { id: 3, style: "Manicure", description: "Classic manicure (demo data)", duration: 1, cost: 1200 },
  { id: 4, style: "Pedicure", description: "Classic pedicure (demo data)", duration: 1, cost: 1800 },
  { id: 5, style: "Braiding", description: "Braids and styling (demo data)", duration: 4, cost: 3500 },
];

export const seedBookings = () => [
  { id: 1, user_id: 3, employee_id: 101, service_id: 1, date: "2030-01-15", status: "accepted" },
  { id: 2, user_id: 1, employee_id: 102, service_id: 3, date: "2030-01-20", status: "pending" },
  { id: 3, user_id: 3, employee_id: 103, service_id: 2, date: "2030-02-02", status: "pending" },
];

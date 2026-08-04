export const loginData = {
  validUser: {
    email: process.env.ADMIN_EMAIL!,
    password: process.env.ADMIN_PASSWORD!,
  },

  invalidUser: {
    email: "invalid@example.com",
    password: "Invalid@123",
  },

  invalidEmail: {
    email: "wrong@example.com",
    password: process.env.ADMIN_PASSWORD!,
  },

  invalidPassword: {
    email: process.env.ADMIN_EMAIL!,
    password: "WrongPassword123",
  },

  emptyEmail: {
    email: "",
    password: process.env.ADMIN_PASSWORD!,
  },

  emptyPassword: {
    email: process.env.ADMIN_EMAIL!,
    password: "",
  },

  emptyCredentials: {
    email: "",
    password: "",
  },
};
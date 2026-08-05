export const loginData = {
  validUser: {
    email: process.env.ADMIN_EMAIL!,
    password: process.env.ADMIN_PASSWORD!,
  },

  invalidCredentials: {
    email: 'invalid@example.com',
    password: 'Invalid@123',
  },

  nonExistingAccount: {
    email: 'nonexistentuser@example.com',
    password: process.env.ADMIN_PASSWORD!,
  },

  emptyEmail: {
    email: '',
    password: process.env.ADMIN_PASSWORD!,
  },

  emptyPassword: {
    email: process.env.ADMIN_EMAIL!,
    password: '',
  },

  emptyCredentials: {
    email: '',
    password: '',
  },
};
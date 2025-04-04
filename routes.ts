/**
 * An array of routes that are accessible to everyone
 * These routes do not require any authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/marketing",
  "/events",
  "/features",
  "/new-verification",
];

/**
 * An array of routes that are accessible to authenticated users
 * These routes require will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix will used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

export function validateLogin(username: string, password: string) {
  const errors: Partial<Record<"username" | "password", string>> = {};
  if (!username) {
    errors.username = "Please enter your username.";
  }
  if (!password) {
    errors.password = "Please enter your password.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }
  return errors;
}
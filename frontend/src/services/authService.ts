import type { User } from "../types/auth";

// FAKE backend. Replace the bodies of these functions with real API
// calls later — the rest of the app won't need to change.

const fakeDelay = () => new Promise((r) => setTimeout(r, 600));

export async function login(email: string, password: string) {
  await fakeDelay();

  if (!email.includes("@")) throw new Error("Please enter a valid email");
  if (password.length < 6) throw new Error("Incorrect email or password");

  const user: User = { id: "1", name: email.split("@")[0], email };
  return { user, token: "fake-jwt-token" };
}

export async function register(name: string, email: string, password: string) {
  await fakeDelay();

  if (password.length < 6) throw new Error("Password must be at least 6 characters");

  const user: User = { id: "1", name, email };
  return { user, token: "fake-jwt-token" };
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await register(name, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="block text-center text-cyan-400 font-bold text-xl mb-8">
          OrbitMind AI
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4"
        >
          <h1 className="text-2xl font-bold">Create account</h1>

          {error && (
            <p className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-md p-3">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm text-slate-400 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 outline-none focus:border-cyan-400"
            />
            <p className="text-xs text-slate-500 mt-1">At least 6 characters</p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-cyan-500 text-slate-950 font-semibold rounded-md py-2 hover:bg-cyan-400 disabled:opacity-50"
          >
            {submitting ? "Creating account..." : "Create account"}
          </button>

          <p className="text-sm text-slate-400 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
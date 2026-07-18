import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center gap-6 px-6 py-4 border-b border-slate-800">
        <Link to="/" className="text-xl font-bold text-cyan-400">OrbitMind AI</Link>
        <Link to="/" className="hover:text-cyan-400">Home</Link>

        {user && (
          <>
            <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
            <Link to="/satellites" className="hover:text-cyan-400">Satellites</Link>
            <Link to="/alerts" className="hover:text-cyan-400">Alerts</Link>
            <Link to="/reports" className="hover:text-cyan-400">Reports</Link>
          </>
        )}

        <div className="ml-auto flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-slate-400">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm border border-slate-700 rounded-md px-3 py-1 hover:border-cyan-400"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-sm bg-cyan-500 text-slate-950 font-semibold rounded-md px-4 py-1.5 hover:bg-cyan-400"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
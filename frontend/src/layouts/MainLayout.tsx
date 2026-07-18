import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation bar - appears on every page inside this layout */}
      <nav className="flex items-center gap-6 px-6 py-4 border-b border-slate-800">
        <span className="text-xl font-bold text-cyan-400">OrbitMind AI</span>
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
        <Link to="/satellites" className="hover:text-cyan-400">Satellites</Link>
        <Link to="/alerts" className="hover:text-cyan-400">Alerts</Link>
        <Link to="/reports" className="hover:text-cyan-400">Reports</Link>
      </nav>

      {/* The current page gets dropped in here */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
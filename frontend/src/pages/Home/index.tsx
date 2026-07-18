import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* HERO */}
      <section className="text-center py-20">
        <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
          Mission Control Assistant
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Predict collisions before they happen
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          OrbitMind AI monitors public satellite data, detects close approaches,
          and recommends safe avoidance maneuvers — validated by simulation.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 border border-slate-700 rounded-lg hover:border-cyan-400"
          >
            View Dashboard
          </Link>
        </div>
      </section>
      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        {[
          { label: "Satellites Tracked", value: "8,420" },
          { label: "Active Alerts", value: "12" },
          { label: "Reports Generated", value: "341" },
          { label: "AI Analyses Run", value: "1,207" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center"
          >
            <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
            <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* NASA APOD - placeholder until backend exists */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Astronomy Picture of the Day</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/2 h-64 bg-slate-800 flex items-center justify-center text-slate-500">
            NASA image loads here
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-xl font-semibold mb-2">Image title</h3>
            <p className="text-slate-400 text-sm">
              Description from the NASA APOD API will appear here once the
              backend is connected.
            </p>
          </div>
        </div>
      </section>
      {/* LATEST ALERTS */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Latest Collision Alerts</h2>
        <div className="space-y-3">
          {[
            { pair: "STARLINK-1234 / COSMOS-2251", risk: "High", time: "6h" },
            { pair: "ISS (ZARYA) / DEBRIS-88123", risk: "Medium", time: "18h" },
            { pair: "NOAA-19 / FENGYUN-1C DEB", risk: "Low", time: "2d" },
          ].map((alert) => (
            <div
              key={alert.pair}
              className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-lg p-4"
            >
              <div>
                <p className="font-medium">{alert.pair}</p>
                <p className="text-sm text-slate-400">
                  Close approach in {alert.time}
                </p>
              </div>
              <span
                className={
                  alert.risk === "High"
                    ? "px-3 py-1 rounded-full text-xs font-semibold bg-red-500/15 text-red-400"
                    : alert.risk === "Medium"
                    ? "px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400"
                    : "px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400"
                }
              >
                {alert.risk}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        OrbitMind AI — Decision support only. Never controls satellites directly.
      </footer>
    </div>
  );
}
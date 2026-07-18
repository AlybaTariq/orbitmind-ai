import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Satellites from "../pages/Satellites";
import CollisionAlerts from "../pages/CollisionAlerts";
import Reports from "../pages/Reports";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Pages WITHOUT the navbar (auth pages) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Pages WITH the navbar (wrapped by MainLayout) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/satellites" element={<Satellites />} />
        <Route path="/alerts" element={<CollisionAlerts />} />
        <Route path="/reports" element={<Reports />} />
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { TeacherLogin } from "./pages/TeacherLogin";
import { Simulator } from "./pages/Simulator";
import { CircuitSimulator } from "./pages/CircuitSimulator";
import { ChemistrySimulator } from "./pages/ChemistrySimulator";
import { PhysicsSimulator } from "./pages/PhysicsSimulator";
import { LoginPage } from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/TeacherLogin" element={<TeacherLogin />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/dashboard/professor" element={<TeacherDashboard />} />
      <Route path="/simulador" element={<Simulator />} />
      <Route path="/simulador/circuito" element={<CircuitSimulator />} />
      <Route path="/simulador/quimica" element={<ChemistrySimulator />} />
      <Route path="/simulador/fisica" element={<PhysicsSimulator />} />
    </Routes>
  );
}

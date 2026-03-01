import React from "react";
import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import PublicProfile from "./components/PublicProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile/:id" element={<PublicProfile />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
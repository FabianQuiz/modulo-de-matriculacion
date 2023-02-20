import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./components/Home";
import { Nomina } from "./components/Nomina";
import { Matricula } from "./components/Matricula";
import { Login } from "./components/Login";
import { Inicio } from "./components/Inicio";
import { Ficha } from "./components/Fichasocio";
import { Estado } from "./components/Enproceso";
function App() {
  return (
   
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/matricula" element={<ProtectedRoute><Matricula/></ProtectedRoute>} />
          <Route path="/inicio" element={<ProtectedRoute><Inicio/></ProtectedRoute>} />
          <Route path="/ficha" element={<ProtectedRoute><Ficha/></ProtectedRoute>} />
          <Route path="/estado-matricula" element={<ProtectedRoute><Estado/></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
  );
}

export default App;

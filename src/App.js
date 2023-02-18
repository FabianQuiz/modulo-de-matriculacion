import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar1} from "./components/Navbar";
import { Navbarpage} from "./components/Navbarpage";
import { Inicio } from "./components/Inicio";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./components/Home";
import { Nomina } from "./components/Nomina";
import { Matricula } from "./components/Matrucula";
function App() {
  return (
   
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          
          <Route path="/matricula" element={<Matricula />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;

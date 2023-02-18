import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar1} from "./components/Navbar";
import { Navbarpage} from "./components/Navbarpage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
   
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;

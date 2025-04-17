import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);
  const GoogleAuthWrapper = ({ children }) => {
    return (
      <GoogleOAuthProvider
        clientId={
          "147340775226-mccq9i94sl0qpjr73gboergef8tqqv2q.apps.googleusercontent.com"
        }
      >
        {children}
      </GoogleOAuthProvider>
    );
  };

  return (
    <GoogleAuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </GoogleAuthWrapper>
  );
}

export default App;

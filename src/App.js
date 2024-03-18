import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Home from './pages/Home'
import './App.css';

function App() {
  const routesArray = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routesArray.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

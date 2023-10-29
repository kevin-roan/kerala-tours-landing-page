import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { Home, Contact, About, Service } from "../Pages";

function LayoutRoutes() {
  const routes = [
    {
      path: "/*",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/service",
      component: Service,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ];

  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default LayoutRoutes;

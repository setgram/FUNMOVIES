import React from "react";

import "./App.css";
import Nav from "./comp/nav/Nav";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Nav />
      </nav>

      <main>Main Content</main>
    </div>
  );
}

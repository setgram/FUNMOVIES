import React from "react";

import "./App.css";
import Nav from "./comp/nav/Nav";
import MovieList from "./movieList/MovieList";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <MovieList />
    </div>
  );
}

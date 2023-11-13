import React, { useEffect, useState } from "react";
import { BsFire } from "react-icons/bs";

import "./MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=cf880f68f76186eea590f5d3a98227f1"
    );

    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <BsFire />
        </h2>
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>
          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

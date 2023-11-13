import React from "react";
import { BsFire } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";

import "./Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <h1>FunMovies</h1>
      <div className="navbar_links">
        <span>
          Popular
          <BsFire />
        </span>
        <span>
          Top rated
          <AiFillStar />
        </span>
        <span>
          Upcoming
          <GiPartyPopper />
        </span>
      </div>
    </div>
  );
}

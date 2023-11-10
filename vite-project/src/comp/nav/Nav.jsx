import React from "react";
import { BsFire } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";

import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <BsFire />
        <AiFillStar />
        <GiPartyPopper />
      </div>
    </nav>
  );
}

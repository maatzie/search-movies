import React from "react";

function Header() {
    return <nav className=" purple darken-3">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Movies Search</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="!#">Repo</a></li>
      </ul>
    </div>
  </nav>

}

export {Header}
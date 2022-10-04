import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg bg-dark ">
        <div class="container">
          <a class="navbar-brand text-light h1" href="#home">
            Hooks
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <Link  to={'/counter'} class="nav-link active text-light">
                         useState
                  </Link>
                
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#home">
                  Link
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import booklog from "./booklogo2.jpg";
const NavBar = props => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ float: "right" }}>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">
                                <img src={booklog} /><span className="sr-only"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/books">
                                Categories
              </NavLink>
                        </li>



                    </ul>

                </div>

                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Books here" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

            </nav>

        </div>
    );
};

export default NavBar;

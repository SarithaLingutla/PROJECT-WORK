import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="/">ShoppingCart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
             <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Books
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/shoppingcart">
                  Cart
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/registration">
                 Registration
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/home1">
                 Home
                </Link>
              </li>
              

    </ul>
    
  </div>
</nav>
        </div>
              )
}

export default Navbar;
import React, { Component } from "react";

import { Link } from "react-router-dom";
import Wishlist from "./wishlists.jsx";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image4 from "../images/image4.jpg";

class Wishlists extends Component {
  state = {
    subWishlists: [],

    Wishlists: [
      {
        id: "101",
        name: "Road of React",
        author: "ROBIN",
        category: "REACTJS",
        src: image1,
        desc:
          "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        price: "$70",
      },
      {
        id: "102",
        name: "LEARNING OF NODE",
        author: "Shelley Powers",
        category: "NODEJS",
        src: image2,
        desc:
          "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.",
        price: "$150",
      },

      {
        id: "104",
        name: "Java Script for Web Developers",
        author: "Gullermo Reach ",
        category: "JAVASCRIPT",
        src: image4,
        desc:
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
        price: "$80",
      },
    ],
  };

  Wishlist = [(this.state.subWishlists = this.state.Wishlists)];
  filtswa = (name) => {
    var Wishlist1 = this.state.Wishlists.filter((m1) => name == m1.category);
    this.setState((this.state.subWishlists = Wishlist1));
  };

  render() {
    return (
      <div className="container-fluid m-0 ">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10">
            {this.state.Wishlists.map((m1) => (
              //

              <Link
                to={{ pathname: `/Wishlist/${m1.id}`, state: { m1 } }}
                style={{ textDecoration: "none" }}
              >
                <Wishlist
                  sw1={m1.name}
                  sw2={m1.desc}
                  sw3={m1.src}
                  sw4={m1.id}
                  sw5={m1.category}
                  sw6={m1.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlists;

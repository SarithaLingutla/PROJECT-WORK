import React, { Component } from 'react'
import full from './catfiles/fstack.jpg';
import react from './catfiles/react.jpg';
import node from './catfiles/nodejs.jpg';
import mjs from './catfiles/modernjs.jpg';
import html from './catfiles/htmlpic.jpg';
import mongo from './catfiles/mongodb.jpg';
import mixed1 from './catfiles/mixed1.jpg';
import mixed2 from './catfiles/mixed2.jpg';
import mixed3 from './catfiles/mixed3.jpg';
import mixed4 from './catfiles/mixed4.jpg';
import pop1 from './catfiles/popular1.jpg';
import pop2 from './catfiles/popular2.jpg';
import pop3 from './catfiles/popular3.jpg';
import pop4 from './catfiles/popular4.jpg';


import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
class Home extends Component {

    divStyle = {
        backgroundColor: '#E2EFC9',
    };
    catstyle = {
        width: 150,
        height: 150,
    };
    state = {}
    render() {
        return (


            <div style={this.divStyle}>
                <div class="jumbotron">
                    <h1 class="display-5 " align='center'>Books At BooksAdda</h1>



                </div>




                <h2 className="mb-4" align="center">Shop By Category</h2>
                <div className='row'>

                    <div className='ml-3 mr-5'> <img src={full} style={this.catstyle} /></div>
                    <div className='ml-5 mr-5'> <img src={react} style={this.catstyle} /></div>
                    <div className='ml-5 mr-5'> <img src={node} style={this.catstyle} /></div>
                    <div className='ml-5 mr-5'> <img src={mjs} style={this.catstyle} /></div>
                    <div className='ml-5 mr-5'> <img src={html} style={this.catstyle} /></div>
                    <div className='ml-5 mr-5'> <img src={mongo} style={this.catstyle} /></div>

                </div>
                <h2 align="center" className="mt-5 mb-3">Mixed Collections</h2>
                <div className="row">

                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={mixed1} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: Mastering Mongo</h5>
                            <h6 class="card-title">Author: Alex Giamas</h6>
                            <p class="card-text">Master the new features and capabilities of MongoDB 4.x Implement advanced data modeling</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>


                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={mixed2} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: Responsive Web Design</h5>
                            <h6 class="card-title">Author: Ben Frain</h6>
                            <p class="card-text">Learn responsive design using HTML5 andCSS3 to adapt websites to any browser or screen size</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={mixed3} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: Smashing Node</h5>
                            <h6 class="card-title">Author: Guillermo Rauch</h6>
                            <p class="card-text">Server side javascript with Node,Connect and Express which helps you to build web Applications</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>


                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={mixed4} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: Pro MERN Stack</h5>
                            <h6 class="card-title">Author: Vasan Subramanian</h6>
                            <p class="card-text">Full Stack Web App Development with Mongo,Express,React and Node --second edition</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>
                </div>


                <h2 className="mt-5 mb-3" align="center">Most Popular Books</h2>

                <div className="row">

                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={pop1} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: React Native in Action</h5>
                            <h6 class="card-title">Author:Nader Dabit</h6>
                            <p class="card-text">Craft Beautiful native mobile apps with javascript and react and setup beautiful pavement to achive your goals</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>
                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={pop2} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: MongoDB and PHP</h5>
                            <h6 class="card-title">Author: O'REILLY</h6>
                            <p class="card-text">With this concise guide, you’ll learn how to build elegant database applications with MongoDB and PHP.</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={pop3} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: HTML and CSS</h5>
                            <h6 class="card-title">Author: Jon Duckett</h6>
                            <p class="card-text">A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>

                    <div class="card" style={{ width: 300 }} className="ml-5 mr-5 border border-warning">
                        <img src={pop4} class="card-img-top" style={{ width: 300, height: 150 }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Title: Eloqent Javascript</h5>
                            <h6 class="card-title">Author: Marijin Haverbeke</h6>
                            <p class="card-text">JavaScript was a newborn programming language, considered as a tiny scripting language in browsers.</p>
                            <a href="#" class="btn btn-warning">Add to Cart</a>
                        </div>
                    </div>



                </div>




            </div>


        );
    }
}

export default Home;
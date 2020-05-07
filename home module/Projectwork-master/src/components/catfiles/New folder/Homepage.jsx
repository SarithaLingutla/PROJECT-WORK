import React, { Component } from 'react'
import full from './fstack.jpg';
import react from './react.jpg';
import node from './nodejs.jpg';
import mjs from './modernjs.jpg';
import html from './htmlpic.jpg';
import mongo from './mongodb.jpg';

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

                    {/* <hr class="my-4" /> */}


                </div>


                <HashRouter>
                    <div className='row'>
                        <h2>Shop By<li><NavLink to='/books'> Category</NavLink></li></h2>

                        <div className='ml-3 mr-5'> <img src={full} style={this.catstyle} /></div>
                        <div className='ml-5 mr-5'> <img src={react} style={this.catstyle} /></div>
                        <div className='ml-5 mr-5'> <img src={node} style={this.catstyle} /></div>
                        <div className='ml-5 mr-5'> <img src={mjs} style={this.catstyle} /></div>
                        <div className='ml-5 mr-5'> <img src={html} style={this.catstyle} /></div>
                        <div className='ml-5 mr-5'> <img src={mongo} style={this.catstyle} /></div>

                    </div>

                </HashRouter>

            </div>


        );
    }
}

export default Home;
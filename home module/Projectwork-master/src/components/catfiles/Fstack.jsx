import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fullsatck from '../fstack.jpg';
class FullStackPage extends Component {
    cardstyle = {
        width: 200,
    };
    state = {
        books: [

            { 'Name': 'The Full Stack developer', 'Author': 'Chris Northwood', 'Category': 'Full Stack', 'Price': 799 },
            { 'Name': 'Pro Mern Stack', 'Author': 'vasan', 'Category': 'Full Stack', 'Price': 399 },
            { 'Name': 'Learning React', 'Author': 'Alex Banks', 'Category': 'React JS', 'Price': 840 },
            { 'Name': 'Road To React', 'Author': 'Robin', 'Category': 'React JS', 'Price': 796 },
            { 'Name': 'Learning Node', 'Author': 'Shelley Powers', 'Category': 'Node JS', 'Price': 542 },
            { 'Name': 'Smashing Node', 'Author': 'Guillermo Rauch', 'Category': 'Node JS', 'Price': 655 },
            { 'Name': 'Eloquent JavaScript', 'Author': 'marjin', 'Category': 'Modern JavaScript', 'Price': 668 },
            { 'Name': 'The Good Parts', 'Author': 'Reilly', 'Category': 'Modern JavaScript', 'Price': 421 },
            { 'Name': 'Responsive Web Design', 'Author': 'Ben Frain', 'Category': 'Html-Css-Rwd', 'Price': 712 },
            { 'Name': 'Responsive Design Workflow', 'Author': 'Stephen Hay', 'Category': 'Html-Css-Rwd', 'Price': 636 },
            { 'Name': 'Scaling Mongo', 'Author': 'Kristina', 'Category': 'Mongo DB', 'Price': 988 },
            { 'Name': 'Mastering Mongo', 'Author': 'Alex Giamas', 'Category': 'Mongo DB', 'Price': 1250 },



        ]
    };
    render() {
        return (
            <div>


            </div>
        );
    }
}

export default FullStackPage;
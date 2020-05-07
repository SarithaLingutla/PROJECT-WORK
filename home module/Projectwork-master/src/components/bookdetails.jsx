import React, { Component } from "react";

class BookDetails extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/books");
    };
    render() {
        return (
            <div>
                <h1 className="text-center">Book Details Page</h1>
                <h1>Selected Book #{this.props.match.params.id}</h1>
                <h1 className="text-center text-success">
                    {this.props.location.state.book.title}
                </h1>
                <h3 className="text-center text-secondary ">
                    {this.props.location.state.book.authors}</h3>

                <h3 className="text-center text-secondary">
                    {this.props.location.state.book.genre}</h3>
                <h3 className="text-center text-secondary">
                    {this.props.location.state.book.publishedDate}</h3>
                <h3 className="text-center text-secondary">
                    {this.props.location.state.book.rating}/10</h3>
                <h3 className="text-center text-secondary">
                    Rs.{this.props.location.state.book.price}</h3>
                <center><button className="btn btn-warning" onClick={this.handleBack}>
                    Add to cart
        </button></center>
                <br />
                <button className="btn btn-danger" onClick={this.handleBack}>
                    Back
        </button>
            </div>
        );
    }
}

export default BookDetails;
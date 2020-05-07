import React, { Component } from "react";
import Category from "./category";

import Book from "./book";
import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";
import axios from 'axios';

class Books extends Component {


    componentDidMount() {
        axios.get('http://localhost:5002/book')
            .then((prom) => {
                const data = prom.data;
                this.setState({ books: data })
            });

    }


    state = {
        books: [],
        genres: [
            { id: 1, name: "Full Stack Developer" },
            { id: 2, name: "ReactJS" },
            { id: 3, name: "NodeJS" },
            { id: 4, name: "JS" },
            { id: 5, name: "HTML, CSS & RWD" },
            { id: 6, name: "MongoDB" },

        ],
        selectedGenre: 1,
        pageSize: 2,
        selectedPage: 1
    };
    handleSelectedGenre = genre => {
        console.log(genre);
        this.setState({ selectedGenre: genre.id });
    };
    handlePageSelect = page => {
        this.setState({ selectedPage: page });
    };
    paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items)
            .slice(startIndex)
            .take(pageSize)
            .value();
    };


    render() {
        const { genres } = this.state;
        const { selectedGenre } = this.state;
        const genre = genres.filter(genre => genre.id === selectedGenre);
        console.log(genre);

        const filteredBooks = this.state.books.filter(
            book => book.genre === genre[0].name
        );
        console.log(filteredBooks);

        const paginatedBooks = this.paginate(
            filteredBooks,
            this.state.selectedPage,
            this.state.pageSize
        );
        return (
            <div style={{ backgroundColor: '#E2EFC9' }}>
                <div className="row">
                    <div className="col-lg-4">
                        <Category
                            genres={this.state.genres}
                            selectedGenre={this.state.selectedGenre}
                            handleSelectedGenre={this.handleSelectedGenre}
                        />
                    </div>
                    <div className="col-8">
                        {/* <Prefer />*/}
                        {paginatedBooks.map(book => (
                            <Link
                                to={{ pathname: `/books/${book._id}`, state: { book } }}
                                style={{ textDecoration: "none" }}
                            >
                                <Book book={book} />
                            </Link>
                        ))}
                    </div>
                </div>

                <Pagination
                    pageSize={this.state.pageSize}
                    totalBooks={filteredBooks.length}
                    selectedPage={this.state.selectedPage}
                    handlePageSelect={this.handlePageSelect}
                />
            </div>
        );
    }
}

export default Books;

import React from "react";
const Category = props => {
    return (
        <div className="mt-5 ml-3">
            <ul className="list-group">
                <h3 className="text-center text-success">Categories</h3>
                {props.genres.map(genre => (
                    <li className="text-warning"
                        onClick={() => props.handleSelectedGenre(genre)}
                        key={genre.id}
                        className={
                            genre.id === props.selectedGenre
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default Category;
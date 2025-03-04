/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { BASE_URL } from "../../constants";

const Card = ({ books, setBooks }) => {
  const handleDelete = async (id) => {
    const response = axios.delete(`${BASE_URL}/books/${id}`);

    setBooks([...books].filter((book) => book.id !== id));
  };

  return (
    <div className="row">
      {books.map((book) => {
        return (
          <div key={book.id} className="bookCardsBox col-12 col-md-6 col-lg-4">
            <div className="bookCard">
              <button
                onClick={() => {
                  handleDelete(book.id);
                }}
                className="cardDelete"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
              <img className="bookImage" src={book.coverImageURL}></img>
              <h2 className="bookTitle">{book.title}</h2>
              <p className="bookDescription">{book.description}</p>
              <p className="bookPrice">Price: {book.price}$</p>
              <p className="bookRating">
                Rating: {book.rating} <FaStar />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

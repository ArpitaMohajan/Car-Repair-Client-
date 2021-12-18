
import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import Fade from "react-reveal/Fade";
const Testimonial = ({ product }) => {
    const { email, comments, star } = product;
    return (
        <div className='testimonials pb-3'>
            <h5>{email}</h5>
            <h3>{comments}</h3>
            <Rating initialRating={star} emptySymbol="far fa-star"
                fullSymbol="far fa-star"
            />
        </div>
    );
};

export default Testimonial;
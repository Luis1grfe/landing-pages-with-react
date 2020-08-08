
import React from "react";
import PropTypes from "prop-types";

const Card = props => {
    return (


        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={props.imageURl} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>

    );
}



Card.propTypes = {
    imageURl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Card;

import React, { Component } from "react";
import "./index.scss";
import PropTypes from 'prop-types';
class Card extends Component {
  render() {
    const { picture, title, price } = this.props;
    return (
      <div className="room__container">
        <div className="room-card">
          <div className="image-container">
            <img src={picture} alt={title} className="room-card__image" />
          </div>
          <div className="room-info-container">
            <div className="data-container">
              <h2 className="room-card__text">{title}</h2>
              <div className="room-card__price">{price}</div>
            </div>
            <div className="btn-container">
              <button className="room-card__btn btn-secondary" type="submit">
                More details
              </button>
              <button className="room-card__btn btn-primary" type="submit">
                Book now!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
export default Card;

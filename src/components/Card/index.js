import React, { Component } from 'react';
class Card extends Component {

  render() {
    const {picture, title, price} = this.props;
    return ( <div className="room__container">
    <div className="room-card">
      <img
        src={picture}
        alt={title}
        className="room-card__image"
      />
      <div className="room-card__text">{title}</div>
      <div className="room-card__price">
        {price}
      </div>
      <button className="room-card__btn">Book now!</button>
    </div>
  </div> );
  }
}

export default Card;

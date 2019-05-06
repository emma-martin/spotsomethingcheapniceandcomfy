import React, { Component } from "react";
import "./index.scss";
import Card from "../Card";
import PropTypes from 'prop-types';

class List extends Component {
  getUniqueIdsFromImages = str => {
    const choppedStr = str.split("/");
    return choppedStr[choppedStr.length - 1].slice(0, -4);
  };
  render() {
    const { rooms, query, getUserQuery, orderByPrice } = this.props;
    return (
      <ul className="app__list">

      <input 
        value={query} 
        type="text" 
        onChange={getUserQuery} 
      />

      <select onChange={orderByPrice}>
        <option value="">
          sort by price
        </option>
        <option value="asc">
          ascending
        </option>
        <option value="desc">
          descending
        </option>
      </select>


       
        {rooms.map(item => {
          return (
            <li
              className="app__list-item"
              key={this.getUniqueIdsFromImages(item.photoUrls.homecardHidpi)}
            >
              <Card
                picture={item.photoUrls.homecardHidpi}
                title={item.title}
                price={`${item.pricePerMonth}${item.currencySymbol}`}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

List.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default List;

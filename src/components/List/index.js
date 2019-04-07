import React, { Component } from "react";
import Card from "../Card";

class List extends Component {
  getUniqueIdsFromImages = (str) => {
    const choppedStr = str.split("/");
    return choppedStr[choppedStr.length -1].slice(0, -4);
  }
  render() {
    const {rooms} = this.props;
    return (
      <ul className="app__list">
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

export default List;

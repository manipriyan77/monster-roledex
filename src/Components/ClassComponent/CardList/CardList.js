import React, { Component } from "react";
import CardComponent from "../Card/CardComponent";
import "./card-list-style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardComponent monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;

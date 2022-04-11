import React, { Component } from "react";
import "./card-style.css";

class CardComponent extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={` monster ${name}`} />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardComponent;

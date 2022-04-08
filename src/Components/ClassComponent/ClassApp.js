import React, { Component } from "react";

export class ClassApp extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: "Mani" }, { name: "Santhanam" }, { name: "Venkatesh" }],
    };
  }
  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default ClassApp;

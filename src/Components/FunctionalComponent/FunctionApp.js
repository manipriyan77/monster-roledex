import React from "react";
import SearchBox from "../ClassComponent/SearchBox/SearchBox";
import CardList from "../ClassComponent/CardList/CardList";
import { useState, useEffect } from "react";

const FunctionApp = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  // console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => respone.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchFieldValue(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchFieldValue);
  });

  return (
    <div>
      <h1 className="title">Monsters Registry</h1>
      <SearchBox
        onSearchChangehandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default FunctionApp;

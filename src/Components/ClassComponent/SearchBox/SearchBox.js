import { Component } from "react";
import "./search-box-style.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChangehandler}
          className={`search-box ${this.props.className}`}
        />
      </div>
    );
  }
}

export default SearchBox;

import React from "react";
import "../styles/searchBar.css";

const handleKeyPress = Symbol(),
  handleOnChange = Symbol();

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  [handleKeyPress](event) {
    if (event.key === "Enter" && this.state.value !== "") {
      this.props.handleInput(this.state.value);
    } else if (event.key === "Enter") {
      alert("Введите что-нибудь в поисковой строке!");
    }
  }

  [handleOnChange](event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <label className="searchBar__wrapper">
        <div className="searchBar__label">Введите что-нибудь интересное и нажмите Enter</div>
        <input
          className="searchBar"
          type="text"
          onChange={this[handleOnChange].bind(this)}
          onKeyPress={this[handleKeyPress].bind(this)}
          value={this.state.value}
        />
      </label>
    );
  }
}

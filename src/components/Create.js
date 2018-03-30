import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      userURL: "",
      userName: "",
      userPrice: ""
    };
  }
  handleUrl(val) {
    this.setState({ userURL: val });
  }
  handleName(val) {
    this.setState({ userName: val });
  }
  handlePrice(val) {
    this.setState({ userPrice: val });
  }
  render() {
    let { created } = this.props;
    let { userURL, userName, userPrice } = this.state;
    return (
      <div id="pagehalf">
        <div id="createinput">
          <div id="noimageholder" />
          <h4>Image URL:</h4>
          <input
            placeholder="URL"
            onChange={e => this.handleUrl(e.target.value)}
          />
          <h4>Product Name:</h4>
          <input
            placeholder="Create Name"
            onChange={e => this.handleName(e.target.value)}
          />
          <h4>Price</h4>
          <input
            placeholder="Create Price"
            onChange={e => this.handlePrice(e.target.value)}
          />
          <button onClick={() => created(userURL, userName, userPrice)}>
            create
          </button>
        </div>
      </div>
    );
  }
}
export default Create;

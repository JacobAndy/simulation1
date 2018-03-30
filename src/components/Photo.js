import React, { Component } from "react";
import "./Photo.css";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      updateURL: "",
      updateName: "",
      updatePrice: ""
    };
  }
  handleFlag() {
    this.setState({ flag: !this.state.flag });
  }
  handleUrl(val) {
    this.setState({ updateURL: val });
  }
  handleName(val) {
    this.setState({ updateName: val });
  }
  handlePrice(val) {
    this.setState({ updatePrice: val });
  }
  render() {
    let { url, name, price, update, deleted, id } = this.props;
    let { updateURL, updateName, updatePrice } = this.state;
    let sectionStyle = {
      backgroundImage: `url(${url})`,
      backgroundSize: "100px 100px"
    };
    return (
      <div id="huh">
        {!this.state.flag ? (
          <div id="imageinfo" style={sectionStyle}>
            <div id="imageholder" />
            <h4>{name}</h4>
            <h4>{price}</h4>
            <button onClick={() => this.handleFlag()}>Edit</button>
            <button onClick={() => deleted(id)}>Delete</button>
          </div>
        ) : (
          <div>
            <input onChange={e => this.handleUrl(e.target.value)} />
            <input onChange={e => this.handleName(e.target.value)} />
            <input onChange={e => this.handlePrice(e.target.value)} />
            <button onClick={() => this.handleFlag()}>cancel</button>
            <button
              onClick={() => {
                this.handleFlag();
                update(id, updateURL, updateName, updatePrice);
              }}
            >
              update
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Photo;

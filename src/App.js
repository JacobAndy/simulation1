import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo";
import Create from "./components/Create";
import Title from "./components/Title";
import routes from "./routes";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gallery: []
    };
    this.createPhoto = this.createPhoto.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/photos")
      .then(photo => {
        console.log(photo);
        this.setState({ gallery: photo.data });
      })
      .catch(err => console.log(err));
  }
  createPhoto(url, name, price) {
    axios
      .post("/api/photos", { url, name, price })
      .then(photo => {
        console.log(photo);
        this.setState({ gallery: photo.data });
      })
      .catch(err => console.log(err));
  }
  updatePhoto(id, url, name, price) {
    axios
      .put(`/api/photos/${id}`, { url, name, price })
      .then(photo => {
        console.log(photo);
        this.setState({ gallery: photo.data });
      })
      .catch(err => console.log(err));
  }
  deletePhoto(id) {
    axios
      .delete(`/api/photos/${id}`)
      .then(photo => {
        console.log(photo);
        this.setState({ gallery: photo.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    let { gallery } = this.state;
    let main = gallery.map(e => {
      return (
        <Photo
          key={e.photo_id}
          id={e.photo_id}
          url={e.url}
          name={e.name}
          price={e.price}
          update={this.updatePhoto}
          deleted={this.deletePhoto}
        />
      );
    });
    return (
      <div>
        <nav id="nav">
          <Title title="SHELFIE" />
          <Link to="/">Dashboard</Link>
          <Link to="/create">Add Inventory</Link>
        </nav>
        <Create created={this.createPhoto} />
        {main}
        {routes}
      </div>
    );
  }
}

export default App;

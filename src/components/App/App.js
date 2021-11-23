import "./App.css";
import "../../styles/styles.css";
import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar.jsx";
import { Modal } from "../Modal/Modal.jsx";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button.jsx";
import { GetImagesApi } from "../../Api/fetchApi";
import { Load } from "../Loader/Loader.jsx";
import scrollPageDown from "../../js/scrollPageDown";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

class App extends Component {
  state = {
    showModal: false,
    pictures: [],
    searchRequest: "",
    loading: false,
    error: "",
    page: 1,
    largeImageSrc: "",
    alt: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      this.setState({ pictures: [] });
    }
  }
  getData = (request, page) => {
    GetImagesApi(request, page)
      .then((response) => {
        if (response.status === 200 && this.state.searchRequest.trim().length) {
          this.setState({
            pictures: [...this.state.pictures, ...response.data.hits],
          });
          if (this.state.pictures.length === 0) {
            toast.error("Error request!");
          }
        }
        if (response.status === 404) {
          throw new Error(response.message || "pictures not exist");
        }
      })
      .catch(function (error) {
        console.error("error", error);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  };

  setSearchRequest = (request) => {
    this.setState({ loading: true, searchRequest: request });
    this.getData(request, this.state.page);
  };
  pageIncrement = () => {
    this.setState({ page: this.state.page + 1, loading: true });
    this.getData(this.state.searchRequest, this.state.page + 1);
    scrollPageDown();
    return;
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  setCurrentPictureSrc = (largeImageSrc, alt) => {
    this.setState({ showModal: !this.state.showModal });
    if (largeImageSrc !== undefined) {
      this.setState({ largeImageSrc, alt });
    }
  };
  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={2000} newestOnTop={true} />
        <Searchbar onSubmit={this.setSearchRequest} />
        {this.state.pictures.length !== 0 && (
          <ImageGallery
            setCurrentPicture={this.setCurrentPictureSrc}
            images={this.state.pictures}
          />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImageSrc} alt={this.state.alt} />
          </Modal>
        )}
        {this.state.loading && <Load />}
        {this.state.pictures.length > 0 && (
          <div className={"container"}>
            <Button onClick={this.pageIncrement} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, setCurrentPicture }) => {
  return (
    <div>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem
          setCurrentPicture={setCurrentPicture}
          images={images}
        />
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setCurrentPicture: PropTypes.func.isRequired,
};

export { ImageGallery };

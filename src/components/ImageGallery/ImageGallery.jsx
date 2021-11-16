import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <div>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem toggle={toggleModal} images={images} />
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export { ImageGallery };
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ toggle, images }) => {
  return (
    <>
      {images.map(item => {
        return (
          <li onClick={toggle} className="ImageGalleryItem" key={shortid.generate()}>
            <img
              src={item.webformatURL}
              alt={item.tags}
              className={s.ImageGalleryItem__image}
              data-largeimage={item.largeImageURL}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export { ImageGalleryItem };
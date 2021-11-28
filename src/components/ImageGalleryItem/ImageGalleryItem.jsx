import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ setCurrentPicture, images }) => {
  const handleClick = e =>
    setCurrentPicture(e.target.dataset.largeimage, e.target.alt);

  return (
    <>
      {images.map(item => {
        return (
          <li
            onClick={handleClick}
            className="ImageGalleryItem"
            key={shortid.generate()}
          >
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
  setCurrentPicture: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export { ImageGalleryItem };

import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onClick }) {
    return (
      <div className={s.containerBtn__loadMore}>
            <button onClick={onClick} className={s.Button}>
      Load more
    </button>
      </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export { Button };
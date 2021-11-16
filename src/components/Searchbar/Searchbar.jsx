import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  onChangeInput = e => {
    this.setState({ searchRequest: e.currentTarget.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    if (!this.state.searchRequest) {
      toast.error('Please, enter a name!');
      // this.props.clearPage();
      return;
    }
    this.setState({ searchRequest: '' });

    this.props.onSubmit(this.state.searchRequest);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.onSearchSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
            value={this.state.searchRequest}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
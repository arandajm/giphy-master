import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./search-form.css";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmitted(this.inputRef.value);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className={styles.container}>
        <input
          type="text"
          placeholder="Find me giphys..."
          ref={e => {
            this.inputRef = e;
          }}
          className={styles.searchField}
        />
        <input type="submit" className={styles.button} />
      </form>
    );
  }
}

SearchForm.propTypes = { onSearchSubmitted: PropTypes.func.isRequired };

export default SearchForm;

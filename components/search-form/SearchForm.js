import React, { Component } from "react";
import PropTypes from "prop-types";

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
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Find me giphys..."
          ref={e => {
            this.inputRef = e;
          }}
        />
        <input type="submit" />
      </form>
    );
  }
}

SearchForm.propTypes = { onSearchSubmitted: PropTypes.func.isRequired };

export default SearchForm;

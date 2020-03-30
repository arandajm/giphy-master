import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchResult } from "../../../lib/custom-types";
import styles from "./random.css";

export class Random extends Component {
  componentDidMount() {
    // call get RandomGiphy Action!
    this.props.getRandomGiphy();
  }

  render() {
    const { giphy, thumbnailClicked, getRandomGiphy } = this.props;
    return (
      <div className={styles.container}>
        <div>
          <button onClick={getRandomGiphy} className={styles.button}>
            Next Giphy
          </button>
        </div>
        {giphy && (
          <div>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                thumbnailClicked(giphy);
              }}
            >
              <img src={giphy.thumbnail} />
            </a>
          </div>
        )}
      </div>
    );
  }
}

Random.propTypes = {
  giphy: SearchResult,
  thumbnailClicked: PropTypes.func.isRequired,
  getRandomGiphy: PropTypes.func.isRequired
};
export default Random;

import React from "react";
import styles from "./spinner.css";

export default function Spinner() {
  return (
    <div className={styles.container}>
      <img src="images/ajax-loader.gif" />
    </div>
  );
}

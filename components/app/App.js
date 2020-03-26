import React from "react";
import NavigationContainer from "../navigation/NavigationContainer";
import styles from "./app.css";

export default ({ children }) => (
  <div>
    <h1 className={styles.header}>Giphy Master</h1>
    <NavigationContainer />
    {children}
  </div>
);

import React from "react";
import NavigationContainer from "../navigation/NavigationContainer";
import styles from "./app.css";
// this component must use here at app level because it is used for 2 pages.s
import GiphyDisplay from "../giphy-display/GiphyDisplay";

export default ({ children }) => (
  <div>
    <h1 className={styles.header}>Giphy Master</h1>
    <NavigationContainer />
    {children}
    <GiphyDisplay
      isShown={true}
      onClick={() => console.log("click on the giphy..")}
      giphy={{
        thumbnail:
          "https://media3.giphy.com/media/A8NNZlVuA1LoY/100_s.gif?cid=2d528ef0f92269a1ff95060af7be77748d271bb0d028ad14&rid=100_s.gif",
        full:
          "https://media3.giphy.com/media/A8NNZlVuA1LoY/giphy.gif?cid=2d528ef0f92269a1ff95060af7be77748d271bb0d028ad14&rid=giphy.gif"
      }}
    />
  </div>
);

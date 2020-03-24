import React from "react";
import NavigationContainer from "../navigation/NavigationContainer";

export default ({ children }) => (
  <div>
    <NavigationContainer />
    {children}
  </div>
);

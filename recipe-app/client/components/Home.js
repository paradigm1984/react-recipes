import React, { Component } from "react";

import Navbar from "./Navbar";
import Recipe from "./Recipe";
import recipeList from "./RecipeList";

class Home extends React.Component {
  render() {
    return(
        <div>
          <Navbar />
          <RecipeList />
        </div>
    );
  }
}

export default Home;

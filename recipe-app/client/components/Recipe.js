import React, { Component } from "react";

class Recipe extends React.Component {
  render() {
    // by putting it in brachets, its the same as saying if theres a title prop, set it to a variable called title.
    // traditional way: const title = this.props.title;
    const { title, img, instructions } = this.props;
    // the ingredients variable will map through the array from home.js passed in as a prop.
    const ingredients = this.props.ingredients.map((ingredient, index) =>(
      // puts them in an li. makes the key their index value as assigned from the .map();
      <li key={index}> {ingredient} </li>
    ));
    return(
        <div className="recipe-card">
          <img className="recipe-card-img" src={img} alt={title} />
          <div className="recipe-card-content">
            <h3 className="recipe-title"> {title} Recipe </h3>
            <h4><strong> Ingredients: </strong></h4>
            <ul>
              {ingredients}
            </ul>
            <h4><strong> Instructions: </strong></h4>
            <p>
              {instructions}
            </p>
          </div>
        </div>
    );
  }
}

export default Recipe;

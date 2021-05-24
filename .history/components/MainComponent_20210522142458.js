import React, { Component } from "react";
import { Mealplan } from "./MealplanComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Mealplan />;
  }
}

export default Main;

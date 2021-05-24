import React, { Component } from "react";
import { View, Text } from "react-native";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Recipes",
  };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, marginTop: 50 }}>Recipes</Text>
      </View>
    );
  }
}

export default Mealplan;

import React, { Component } from "react";
import { View, Text } from "react-native";

class Mealplan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Mealplan",
  };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Mealplan</Text>
      </View>
    );
  }
}

export default Mealplan;

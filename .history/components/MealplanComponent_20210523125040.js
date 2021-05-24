import React, { Component } from "react";
import { View, Text } from "react-native";

class Mealplan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Directory",
  };
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

export default Mealplan;

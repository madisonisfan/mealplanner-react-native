import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Recipes: All Recipes",
  };
  render() {
    return (
      <View>
        <Button title="Favorites" />
        <Button title="Add Recipe" />
        <Text style={{ fontSize: 25, marginTop: 50 }}>Recipes</Text>
      </View>
    );
  }
}

export default Recipes;

import React, { Component } from "react";
import { View, Text } from "react-native";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Profile Page",
  };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, marginTop: 50 }}>Mealplan</Text>
      </View>
    );
  }
}

export default Mealplan;

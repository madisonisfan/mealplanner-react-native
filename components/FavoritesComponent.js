import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
} from "react-native";

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

class Favorites extends Component {
  static navigationOptions = {
    title: "Your Favorites",
  };

  render() {
    return (
      <View>
        <Text>Favorites Page</Text>
      </View>
    );
  }
}

export default Favorites;

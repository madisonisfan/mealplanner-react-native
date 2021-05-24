import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
        <Button style={styles.topButtons} title="Favorites" />
        <Button style={styles.topButtons} title="Add Recipe" />
        <Text style={{ fontSize: 25, marginTop: 50 }}>Recipes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topButtons: {
    width: "25%",
  },
});

export default Recipes;

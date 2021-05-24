import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { Button } from "react-native-elements";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealtype: "all",
    };
  }
  static navigationOptions = {
    title: "Recipes: All Recipes",
  };
  render() {
    return (
      <View>
        <View style={styles.topButtonsView}>
          <Button style={styles.topButtons} title="Favorites" />
          <Button style={styles.topButtons} title="Add Recipe" />
        </View>
        <View>
          <Picker
            selectedValue={this.state.mealtype}
            onValueChange={(mealtype) => this.setState({ mealtype: mealtype })}
          ></Picker>
        </View>
        <Text style={{ fontSize: 25, marginTop: 50 }}>Recipes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topButtons: {
    //width: "30%",
    margin: 20,
  },
  topButtonsView: {
    // alignContent: "space-between",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Recipes;

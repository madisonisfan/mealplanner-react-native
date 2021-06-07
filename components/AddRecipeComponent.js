import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, Card, Icon, Input } from "react-native-elements";
import { connect } from "react-redux";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
  static navigationOptions = {
    title: "Add Recipe",
  }; */

  render() {
    return (
      <View style={{ padding: 15 }}>
        <Text style={styles.label}>Recipe Name</Text>
        <Input placeholder="Recipe Name" inputStyle={{ fontSize: 15 }} />
        <Text style={styles.label}>Description</Text>
        <Input
          placeholder="Brief recipe description"
          inputStyle={{ fontSize: 15 }}
          inputContainerStyle={{ borderColor: "black" }}
        />
        <Text style={styles.label}>Preptime</Text>
        <Input
          placeholder="Preptime in minutes"
          inputStyle={{ fontSize: 15 }}
        />
        <Text style={styles.label}>Cooktime</Text>
        <Input
          placeholder="Cooktime in minutes"
          inputStyle={{ fontSize: 15 }}
        />
        <Text style={styles.label}>Ingredients</Text>
        <Input placeholder="Ingredients" inputStyle={{ fontSize: 15 }} />
        <Text style={styles.label}>Instructions</Text>
        <Input placeholder="Instructions" inputStyle={{ fontSize: 15 }} />
        <Button
          type="outline"
          title="Submit Recipe"
          titleStyle={{ color: "#000" }}
          buttonStyle={{ backgroundColor: "#FFF", color: "#000" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    fontSize: 5,
  },
});

export default AddRecipe;

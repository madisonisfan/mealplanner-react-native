import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

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
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={{ fontSize: 20 }}>Monday, January 1, 2021</Text>
        </View>
        <ScrollView>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 18 }}>Breakfast</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#B8FAFE",
    height: 75,
  },
});

export default Mealplan;

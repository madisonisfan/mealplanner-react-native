import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
} from "react-native";
import { Button, Card } from "react-native-elements";

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
          >
            <Picker.Item label="All Recipes" value="all" />
            <Picker.Item label="Breakfast" value="breakfast" />
            <Picker.Item label="Lunch/Dinner" value="lunchDinner" />
            <Picker.Item label="Snacks" value="snacks" />
            <Picker.Item label="Drinks" value="drinks" />
          </Picker>
        </View>
        <ScrollView>
          <Card style={{ flexDirection: "row" }}>
            <Image
              resizeMethod="auto"
              style={{ width: 150, height: 100 }}
              source={require("./images/food1.jpg")}
            />
            <View>
              <Text>Recipe Name</Text>
              <Text>Recipe Description</Text>
            </View>
          </Card>
        </ScrollView>
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

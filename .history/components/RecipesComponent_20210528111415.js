import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
} from "react-native";
import { Button, Card, Icon } from "react-native-elements";

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
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.topButtonsView}>
          <Button
            type="outline"
            raised
            style={styles.topButtons}
            title={<Text style={{ color: "#000000" }}>My Favorites</Text>}
          />
          <Button
            type="outline"
            raised
            style={styles.topButtons}
            title={<Text style={{ color: "#000000" }}>Add Recipe</Text>
          />
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
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{}}
                resizeMethod="auto"
                style={{ width: 150, height: 100, marginRight: 10 }}
                source={require("./images/food1.jpg")}
              />
              <View>
                <Text>Recipe Name</Text>
                <Text>Recipe Description</Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <Icon name="star" type="font-awesome" />
                </View>
              </View>
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
    color: "#FFFFFF",
  },
  topButtonsView: {
    // alignContent: "space-between",
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "#B8FAFE",
    height: 75,
  },
});

export default Recipes;

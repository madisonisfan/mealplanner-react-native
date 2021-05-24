import React, { Component } from "react";
import { Mealplan } from "./MealplanComponent";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//const Tab = createBottomTabNavigator();

/**function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="mealplan" component={Mealplan} />
    </Tab.Navigator>
  );
} */

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //return <MyTabs />;
    //
    return (
      return <Mealplan />;
    );
  }
}

export default Main;

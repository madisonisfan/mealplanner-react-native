import React, { Component } from "react";
import Mealplan from "./MealplanComponent";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import App from "../App";

//const Tab = createBottomTabNavigator();

/**function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="mealplan" component={Mealplan} />
    </Tab.Navigator>
  );
} */

const MealplanNavigator = createStackNavigator(
  {
    Mealplan: { screen: Mealplan },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(215, 242, 250);",
      },
      headerTitleStyle: {
        color: "#000000",
      },
    },
  }
);

const MainNavigator = createBottomTabNavigator({
  Mealplan: {
    screen: MealplanNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="" type size={24} color={tintColor} />
      ),
    },
  },
});

const AppNavigator = createAppContainer(MealplanNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;

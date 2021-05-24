import React, { Component } from "react";
import Mealplan from "./MealplanComponent";
import { View, Platform, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "../App";

//const Tab = createBottomTabNavigator();

/**function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="mealplan" component={Mealplan} />
    </Tab.Navigator>
  );
} */

const MealplanDirectory = createStackNavigator(
  {
    Mealplan: { screen: Mealplan },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(MealplanDirectory);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //return <MyTabs />;
    //
    //return <Mealplan />;
    // <AppNavigator />
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <Text>hELLO</Text>
      </View>
    );
  }
}

export default Main;

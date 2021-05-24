import React, { Component } from "react";
import Mealplan from "./MealplanComponent";
import Recipes from "./RecipesComponent";
import Blog from "./BlogComponent";
import ProfilePage from "./ProfilePageComponent";

import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import App from "../App";

const Tab = createBottomTabNavigator();

/*const MealplanNavigator = createStackNavigator(
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
); */

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="mealplan" component={Mealplan} />
      <Tab.Screen name="recipes" component={Recipes} />
      <Tab.Screen name="blog" component={Blog} />
      <Tab.Screen name="profilepage" component={ProfilePage} />
    </Tab.Navigator>
  );
}

/*const MainNavigator = createBottomTabNavigator(
  {
    Mealplan: {
      screen: MealplanNavigator,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="pencil" type="font-awesome" size={24} color={tintColor} />
      ),
    }, 
    },
  },
  {
    initialRouteName: "Mealplan",
  }
); */

//const AppNavigator = createAppContainer(MyTabs);

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}

export default Main;

/**    <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View> */

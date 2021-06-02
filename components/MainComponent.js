import React, { Component } from "react";
import Mealplan from "./MealplanComponent";
import Recipes from "./RecipesComponent";
import Blog from "./BlogComponent";
import ProfilePage from "./ProfilePageComponent";
import { connect } from "react-redux";
import { View, Platform, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { fetchRecipes } from "../redux/ActionCreators";
import App from "../App";

const mapDispatchToProps = {
  fetchRecipes,
};

const MealplanNavigator = createStackNavigator(
  {
    Mealplan: { screen: Mealplan },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D7FFFF",
      },
      headerTitleStyle: {
        color: "#000000",
      },
    },
  }
);

const RecipesNavigator = createStackNavigator(
  {
    Recipes: { screen: Recipes },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D7FFFF",
      },
      headerTitleStyle: {
        color: "#000000",
      },
    },
  }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: { screen: Blog },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D7FFFF",
      },
      headerTitleStyle: {
        color: "#000000",
      },
    },
  }
);
const ProfileNavigator = createStackNavigator(
  {
    Profile: { screen: ProfilePage },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D7FFFF",
      },
      headerTitleStyle: {
        color: "#000000",
      },
    },
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    Mealplan: {
      screen: MealplanNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="utensils"
            type="font-awesome"
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
    Recipes: {
      screen: RecipesNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
    Blog: {
      screen: BlogNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="users"
            type="font-awesome"
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="user"
            type="font-awesome"
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#5637DD",
      inactiveBackgroundColor: "#CEC8FF",
      activeTintColor: "#fff",
      inactiveTintColor: "#808080",
      labelStyle: { fontSize: 16 },
      showLabel: false,
    },
  }
);
const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return <AppNavigator />;
  }
}

/*<NavigationContainer>
        <MyTabs />
      </NavigationContainer> */

export default connect(null, mapDispatchToProps)(Main);

/**    <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View> */

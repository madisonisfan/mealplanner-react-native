import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Button, Card, Icon } from "react-native-elements";
//import { ScrollView, FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { connect } from "react-redux";
import { MultiTap } from "react-native-tap";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    mealplan: state.mealplan,
    favorites: state.favorites,
  };
};

class Mealplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      currentDay: "Monday",
    };
  }

  static navigationOptions = {
    title: "Your Mealplan",
  };

  handleEditPress(mealplanItemId) {
    console.log("mealplan id: ", mealplanItemId);
    console.log("current day: ", this.state.currentDay);
    this.props.navigation.navigate("RecipeSwap");
  }

  render() {
    const Monday = "Monday";
    const Tuesday = "Tuesday";
    const Wednesday = "Wednesday";
    const Thursday = "Thursday";
    const Friday = "Friday";
    const Saturday = "Saturday";
    const Sunday = "Sunday";

    const favoritesList = this.props.favorites.favorites.map(
      (favoritedRecipe) => favoritedRecipe.recipeId
    );
    //this get the object in the mealplan array
    const currentDay = this.props.mealplan.mealplan.filter(
      (mealplanItem) => mealplanItem.day === this.state.currentDay
    )[0];

    const renderMealplanDay = ({ item }) => {
      if (item.recipeId === null) {
        return (
          <View>
            <View style={{ marginTop: 10, marginLeft: 15 }}>
              <Text style={{ fontSize: 18 }}>{item.mealtype}</Text>
            </View>
            <Card>
              <View style={{ flexDirection: "row" }}>
                <Text>No meals added. </Text>
                <View style={{ position: "absolute", right: 0 }}>
                  <Icon
                    name="pencil"
                    type="font-awesome"
                    onPress={() => this.handleEditPress(item.id)}
                  />
                </View>
              </View>
            </Card>
          </View>
        );
      }

      return (
        <View>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ fontSize: 18 }}>{item.mealtype}</Text>
          </View>
          <Card>
            <RenderRecipe
              recipe={
                this.props.recipes.recipes.filter(
                  (recipe) => recipe.id === item.recipeId
                )[0]
              }
            />
            <View style={{ position: "absolute", right: 0, bottom: 0 }}>
              <Icon
                name="pencil"
                type="font-awesome"
                onPress={() => this.handleEditPress(item.id)}
              />
            </View>
          </Card>
        </View>
      );
    };

    return (
      <View>
        <ScrollView
          horizontal
          style={{
            backgroundColor: "#D7FFFF",
          }}
        >
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Monday"
            onPress={() => {
              this.setState({ currentDay: Monday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Tuesday"
            onPress={() => {
              this.setState({ currentDay: Tuesday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Wednesday"
            onPress={() => {
              this.setState({ currentDay: Wednesday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Thursday"
            onPress={() => {
              this.setState({ currentDay: Thursday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Friday"
            onPress={() => {
              this.setState({ currentDay: Friday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Saturday"
            onPress={() => {
              this.setState({ currentDay: Saturday });
              console.log(this.state.currentDay);
            }}
          />
          <Button
            type="clear"
            titleStyle={{
              color: "#000000",
              fontSize: 18,
              marginRight: 10,
              marginLeft: 10,
            }}
            title="Sunday"
            onPress={() => {
              this.setState({ currentDay: Sunday });
              console.log(this.state.currentDay);
            }}
          />
        </ScrollView>

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={{ fontSize: 20 }}>Monday, January 1, 2021</Text>
        </View>

        <FlatList
          data={currentDay[`${this.state.currentDay}`]}
          renderItem={renderMealplanDay}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

class RenderRecipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{}}
            resizeMethod="auto"
            style={{ width: 150, height: 100, marginRight: 10 }}
            //source={require("./images/food1.jpg")}
            source={{ uri: baseUrl + recipe.image }}
          />
          <View style={{ flexGrow: 1 }}>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 18 }}>{recipe.name}</Text>
              <Text>{recipe.description}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps)(Mealplan);

/*
<ScrollView>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ fontSize: 18 }}>Breakfast</Text>
          </View>
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{}}
                resizeMethod="auto"
                style={{ width: 150, height: 100, marginRight: 10 }}
                source={require("./images/food1.jpg")}
              />
              <View style={{ flexGrow: 1 }}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 18 }}>Recipe Name</Text>
                  <Text>Recipe Description</Text>
                </View>
                <View style={{ alignSelf: "flex-end", flex: 1 }}>
                  <Icon name="pencil" type="font-awesome" />
                </View>
              </View>
            </View>
          </Card>
          <View style={{ marginTop: 10, marginLeft: 15 }}>
            <Text style={{ fontSize: 18 }}>Lunch</Text>
          </View>
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Text>No meals Added. </Text>
              <View style={{ alignSelf: "flex-end", flex: 1 }}>
                <Icon name="pencil" type="font-awesome" />
              </View>
            </View>
          </Card>
        </ScrollView>
*/

/**
 * 
 * <MultiTap
          onSingleTap={() =>
            this.props.navigation.navigate("RecipeDetails", {
              recipeId: recipe.id,
            })
          }
        >
          <Card>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{}}
                resizeMethod="auto"
                style={{ width: 150, height: 100, marginRight: 10 }}
                //source={require("./images/food1.jpg")}
                source={{ uri: baseUrl + recipe.image }}
              />
              <View style={{ flexGrow: 1 }}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 18 }}>{recipe.name}</Text>
                  <Text>{recipe.description}</Text>
                </View>
                <View style={{ position: "absolute", right: 0, bottom: 0 }}>
                  <Icon
                    type="font-awesome"
                    size={30}
                    name={isFavorited ? "star" : "star-o"}
                    onPress={() => this.handleFavorite(isFavorited, recipe.id)}
                  />
                </View>
              </View>
            </View>
          </Card>
        </MultiTap>
 */

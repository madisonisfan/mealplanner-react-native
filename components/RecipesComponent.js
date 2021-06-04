import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Button, Card, Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { baseUrl } from "../shared/baseUrl";
import {
  postFavorite,
  removeFavorite,
  deleteFavorite,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return { recipes: state.recipes, favorites: state.favorites };
};

const mapDispatchToProps = {
  postFavorite: (recipeId) => postFavorite(recipeId),
  removeFavorite: (recipeId) => deleteFavorite(recipeId),
};

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealtype: "all",
    };
  }
  static navigationOptions = {
    title: "Recipes",
  };

  handleFavorite(isFavorite, recipeId) {
    if (isFavorite) {
      const favoriteObject = this.props.favorites.favorites.filter(
        (favoriteItem) => favoriteItem.recipeId === recipeId
      )[0];
      const favoriteId = favoriteObject.id;
      this.props.removeFavorite(favoriteId);
    } else {
      this.props.postFavorite(recipeId);
    }
  }

  render() {
    const favoritesList = this.props.favorites.favorites.map(
      (favoritedRecipe) => favoritedRecipe.recipeId
    );

    if (this.props.recipes.errMess) {
      return (
        <View>
          <Text>{this.props.recipes.errMess}</Text>
        </View>
      );
    }

    const renderRecipeItem = ({ item }) => {
      const isFavorited = favoritesList.includes(item.id);

      return (
        <Card>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{}}
              resizeMethod="auto"
              style={{ width: 150, height: 100, marginRight: 10 }}
              //source={require("./images/food1.jpg")}
              source={{ uri: baseUrl + item.image }}
            />
            <View style={{ flexGrow: 1 }}>
              <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={{ position: "absolute", right: 0, bottom: 0 }}>
                <Icon
                  type="font-awesome"
                  size={30}
                  name={isFavorited ? "star" : "star-o"}
                  onPress={() => this.handleFavorite(isFavorited, item.id)}
                />
              </View>
            </View>
          </View>
        </Card>
      );
    };

    return (
      <View>
        <View style={styles.topButtonsView}>
          <Button
            type="outline"
            raised
            titleStyle={{ color: "#000000" }}
            title="My Favorites"
            onPress={() => this.props.navigation.navigate("Favorites")}
          />
          <Button
            type="outline"
            raised
            titleStyle={{ color: "#000000" }}
            title="Add Recipe"
          />
        </View>
        <View>
          <Picker
            mode="dropdown"
            style={styles.picker}
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
        <FlatList
          /* data={this.props.recipes.recipes.filter((recipe) => {
            recipe.id === 0;
          })} */
          data={
            this.state.mealtype === "all"
              ? this.props.recipes.recipes
              : this.props.recipes.recipes.filter(
                  (recipe) => recipe.mealType === this.state.mealtype
                )
          }
          renderItem={renderRecipeItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topButtons: {
    //width: "30%",
    //margin: 20,
    //color: "#FFFFFF",
  },
  topButtonsView: {
    // alignContent: "space-between",
    marginTop: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  header: {
    backgroundColor: "#B8FAFE",
    height: 75,
  },
  picker: {
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#FFFFFF",
    height: 40,
    marginTop: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

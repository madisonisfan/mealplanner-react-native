import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
//import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Button, Card, Icon } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { deleteFavorite } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
  removeFavorite: (recipeId) => deleteFavorite(recipeId),
};

class Favorites extends Component {
  static navigationOptions = {
    title: "My Favorites",
  };

  handleFavorite(recipeId) {
    const favoriteObject = this.props.favorites.favorites.filter(
      (favoriteItem) => favoriteItem.recipeId === recipeId
    )[0];
    const favoriteId = favoriteObject.id;
    this.props.removeFavorite(favoriteId);
  }

  render() {
    const favoritesList = this.props.favorites.favorites.map(
      (favoritedRecipe) => favoritedRecipe.recipeId
    );
    const renderFavoriteItem = ({ item }) => {
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
              <View style={{ alignSelf: "flex-end", flex: 1 }}>
                <Icon
                  size={30}
                  name="star"
                  type="font-awesome"
                  onPress={() => this.handleFavorite(item.id)}
                />
              </View>
            </View>
          </View>
        </Card>
      );
    };

    return (
      <View>
        <FlatList
          data={this.props.recipes.recipes.filter((recipe) =>
            favoritesList.includes(recipe.id)
          )}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

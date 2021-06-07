import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { recipes: state.recipes, favorites: state.favorites };
};

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "pasta",
    };
  }

  static navigationOptions = {
    title: "Recipe Details",
  };

  render() {
    const recipeId = this.props.navigation.getParam("recipeId");
    const recipe = this.props.recipes.recipes.filter(
      (recipe) => recipe.id === recipeId
    )[0];
    return (
      <View>
        <RenderRecipe recipe={recipe} />
      </View>
    );
  }
}

class RenderRecipe extends Component {
  render() {
    const { recipe } = this.props;

    const renderIngredientItem = ({ item }) => {
      return (
        <View style={{ flexDirection: "row" }}>
          <Icon type="font-awesome" name="circle" size={10} />
          <Text>{item.amount} </Text>
          <Text>{item.ingredient}</Text>
        </View>
      );
    };

    const renderInstructionItem = ({ item, index }) => {
      return (
        <View style={{ flexDirection: "row" }}>
          <Text>{index + 1}.</Text>
          <Text> {item}</Text>
        </View>
      );
    };

    return (
      <View>
        <Card>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Prep Time: {recipe.preptime} mins</Text>
            <Text>Cook Time: {recipe.cooktime} mins </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Total Servings: {recipe.servings}</Text>
            <Text>Calories per serving: {recipe.calories}</Text>
          </View>
        </Card>
        <FlatList
          data={recipe.ingredients}
          renderitem={renderIngredientItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={{ padding: 15 }}>
          <Text style={styles.title}>Ingredients</Text>

          <FlatList
            data={recipe.ingredients}
            renderItem={renderIngredientItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Text style={styles.title}>Instructions</Text>
          <FlatList
            data={recipe.instructions}
            renderItem={renderInstructionItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default connect(mapStateToProps)(RecipeDetails);

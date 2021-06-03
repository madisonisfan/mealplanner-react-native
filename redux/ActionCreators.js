import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchRecipes = () => (dispatch) => {
  // dispatch(campsitesLoading());

  return fetch(baseUrl + "recipes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((recipes) => dispatch(addRecipes(recipes)))
    .catch((error) => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
  type: ActionTypes.RECIPES_LOADING,
});

export const recipesFailed = (errMess) => ({
  type: ActionTypes.RECIPES_FAILED,
  payload: errMess,
});

export const addRecipes = (recipes) => ({
  type: ActionTypes.ADD_RECIPES,
  payload: recipes,
});

export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading());

  return fetch(baseUrl + "favorites")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((favorites) => dispatch(addFavorites(favorites)))
    .catch((error) => dispatch(favoritesFailed(error.message)));
};

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING,
});

export const favoritesFailed = (errMess) => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errMess,
});

export const addFavorites = (favorites) => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites,
});

export const postFavorite = (recipeId) => (dispatch) => {
  const addRecipe = {
    recipeId,
  };

  return fetch(baseUrl + "favorites", {
    method: "POST",
    body: JSON.stringify(addRecipe),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addFavorite(response)))
    .catch((error) => {
      console.log("post comment", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const addFavorite = (recipeId) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: recipeId,
});

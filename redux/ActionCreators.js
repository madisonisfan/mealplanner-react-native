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
      console.log("post favorite", error.message);
      alert("The recipe could not be favorited\nError: " + error.message);
    });
};

export const addFavorite = (recipe) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: recipe,
});

export const deleteFavorite = (favoriteId) => (dispatch) => {
  dispatch(removeFavorite(favoriteId)); //need to figure out a way to do this in the then

  return (
    fetch(baseUrl + `favorites/${favoriteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
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
      //.then((response) => dispatch(removeFavorite(response))) //dispatch(deleteFavorite(response))
      //.then((response) => console.log("delete response", response.status))
      //.then(() => dispatch(removeFavorite(favoriteId)))
      .catch((error) => {
        console.log("post favorite", error.message);
        alert("The recipe could not be favorited\nError: " + error.message);
      })
  );
};

const removeFavorite = (favoriteId) => ({
  type: ActionTypes.REMOVE_FAVORITE,
  payload: favoriteId,
});

/*const removeFavorite = (recipe) => ({
  type: ActionTypes.REMOVE_FAVORITE,
  payload: recipe,
});
*/

export const fetchBlogs = () => (dispatch) => {
  // dispatch(campsitesLoading());

  return fetch(baseUrl + "blogs")
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
    .then((blogs) => dispatch(addBlogs(blogs)))
    .catch((error) => dispatch(blogsFailed(error.message)));
};

export const addBlogs = (recipes) => ({
  type: ActionTypes.ADD_BLOGS,
  payload: recipes,
});

export const blogsLoading = () => ({
  type: ActionTypes.BLOGS_LOADING,
});

export const blogsFailed = (errMess) => ({
  type: ActionTypes.BLOGS_FAILED,
  payload: errMess,
});

export const postPost = (postContent, postType) => (dispatch) => {
  const newPost = {
    postContent,
    postType,
  };

  newPost.username = "Tester username";
  newPost.date = new Date().toLocaleDateString();

  return fetch(baseUrl + "blogs", {
    method: "POST",
    body: JSON.stringify(newPost),
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
    .then((post) => dispatch(addPost(post)))
    .catch((error) => {
      console.log("post favorite", error.message);
      alert("The post could not be posted\nError: " + error.message);
    });
};

export const addPost = (post) => ({
  type: ActionTypes.ADD_POST,
  payload: post,
});

export const fetchMealplan = () => (dispatch) => {
  // dispatch(campsitesLoading());

  return fetch(baseUrl + "mealplan")
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
    .then((mealplan) => dispatch(addMealplan(mealplan)))
    .catch((error) => dispatch(meaplanFailed(error.message)));
};

export const addMealplan = (mealplan) => ({
  type: ActionTypes.ADD_MEALPLAN,
  payload: mealplan,
});

export const mealplanLoading = () => ({
  type: ActionTypes.MEALPLAN_LOADING,
});

export const meaplanFailed = (errMess) => ({
  type: ActionTypes.MEALPLAN_FAILED,
  payload: errMess,
});

/*
export const editMealplanItem = (mealplanDay, mealplanItemId, recipeId)=>dispatch=>{

  return fetch(baseUrl + )


}
*/

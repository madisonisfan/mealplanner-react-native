import * as ActionTypes from "./ActionTypes";

export const favorites = (
  state = { isLoading: true, errMess: null, favorites: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        favorites: action.payload,
      };
    case ActionTypes.FAVORITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.FAVORITES_LOADING:
      return { ...state, isLoading: true, errMess: null, favorites: [] };
    case ActionTypes.ADD_FAVORITE:
      const favorite = action.payload;
      return { ...state, favorites: state.favorites.concat(favorite) };
    case ActionTypes.REMOVE_FAVORITE:
      /*const favoriteRecipe = action.payload;
      const newFavorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteRecipe.id
      );
      */
      const favoriteId = action.payload;

      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== favoriteId
        ),
      };
    default:
      return state;
  }
};

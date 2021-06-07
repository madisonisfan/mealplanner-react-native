import * as ActionTypes from "./ActionTypes";

export const mealplan = (
  state = { isLoading: true, errMess: null, mealplan: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_MEALPLAN:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        mealplan: action.payload,
      };
    case ActionTypes.MEALPLAN_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.MEALPLAN_LOADING:
      return { ...state, isLoading: true, errMess: null, mealplan: [] };

    default:
      return state;
  }
};

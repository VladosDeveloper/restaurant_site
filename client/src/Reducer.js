export const initialState = {
  reviews: [],
  reviewIsOpen: false,
  isServiceOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        reviews: action.items,
      };
    case "OPEN_SERVICE":
      return {
        ...state,
        isServiceOpen: true,
      };
    case "CLOSE_SERVICE":
      return {
        ...state,
        isServiceOpen: false,
      };
    case "OPEN_REVIEW":
      return {
        ...state,
        reviewIsOpen: true,
      };
    case "ADD_REVIEW":
      return { ...state, reviews: [...state.reviews, action.item] };
    case "CLOSE_REVIEW":
      return {
        ...state,
        reviewIsOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;

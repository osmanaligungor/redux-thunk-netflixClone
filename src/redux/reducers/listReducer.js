import ActionTypes from "../actionTypes";

const {
  LIST_LOADING,
  LIST_ERROR,
  LIST_SUCCESS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
} = ActionTypes;

const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_LOADING:
      return { ...state, isLoading: true };

    case LIST_ERROR:
      return { ...state, isLoading: false, error: payload };

    case LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: payload };

    case ADD_TO_LIST:
      const updated = state.list.concat(payload);
      return { ...state, isLoading: false, error: null, list: updated };

    case REMOVE_FROM_LIST:
      const filtered = state.list.filter((i) => i.id !== payload.id);
      return { ...state, isLoading: false, error: null, list: filtered };
    default:
      return state;
  }
};

export default listReducer;

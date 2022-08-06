import { SKIP_VALUES } from "../ActionType";

const initialState = {
  value_data: 0,
};

const SkipValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKIP_VALUES:

      return Object.assign({}, state, {
        value_data: action.payload,
      });

    default:
      return state;
  }
};

export default SkipValueReducer;

import { GateWays } from "../ActionType";

const initialState = {
  GateWaysValue: {
    ValueType: "",
    AdultValue: 0,
    ChildValue: 0,
    FaltValue: 0,
  },
};

const GateWaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case GateWays:
      // console.log("action.payload", action.payload);
      // console.log("state", state);
      return Object.assign({}, state, {
        GateWaysValue: action.payload,
      });

    default:
      return state;
  }
};

export default GateWaysReducer;

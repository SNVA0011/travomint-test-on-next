import { AllData } from "../ActionType";

const initialState = {
  AllFlight_data: {},
  SelectedDatas: {},
  inBoundData: {},
  Objdata: {},
};

const FlightResultData = (state = initialState, action) => {
  switch (action.type) {
    case AllData:
      return Object.assign({}, state, {
        AllFlight_data: action.payload.AllFlight_data,
        SelectedDatas: action.payload.SelectedDatas,
        inBoundData: action.payload.inBoundData,
        Objdata: action.payload.Objdata,
      });

    default:
      return state;
  }
};

export default FlightResultData;

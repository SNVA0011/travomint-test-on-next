import { combineReducers } from "redux";
import CurrencyReducer from "../CurrencyReducer";
import dataReducer from "../../../Feature/Action.js";
import { persistStore, persistReducer } from "redux-persist";
import SkipValueReducer from "../SkipValueReducer";
import AuthReducer from "../AuthReducer";
import FlightResultData from "../FlightResultData";
import GateWaysReducer from "../GateWaysReducer";
import storage from "redux-persist/lib/storage";

const presistConfig = {
  key: "root",
  storage,
};

export const RootReducer = combineReducers({
  currency_Reducer: persistReducer(presistConfig, CurrencyReducer),
  data: persistReducer(presistConfig, dataReducer),
  auth: persistReducer(presistConfig, AuthReducer),
  flightResultData: persistReducer(presistConfig, FlightResultData),
  gateWaysReducer: GateWaysReducer,
  SkipValue_Reducer: SkipValueReducer,
});

import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./Reducer.js/Root/RootReducer.js";
import { persistStore, persistReducer } from "redux-persist";
export const store = configureStore({
  reducer: RootReducer,
  // data:dataReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

import { combineReducers } from "@reduxjs/toolkit";
import btcSlice from "./btcSlice";
import configSlice from "./configSlice";

const rootReducer = combineReducers({
  btcData: btcSlice,
  config: configSlice,
});

export default rootReducer;

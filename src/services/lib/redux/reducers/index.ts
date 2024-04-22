import { combineReducers } from "@reduxjs/toolkit";
import sampleSlice from "../slice/sampleSlice";
export const rootReducer = combineReducers({
  sample: sampleSlice,
});

import { configureStore } from "@reduxjs/toolkit";
import currentChannelReducer from "./features/currentChannelSlice";

export const store = configureStore({
  reducer: {
    currentChannel: currentChannelReducer,
  },
});

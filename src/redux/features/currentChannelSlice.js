import { createSlice } from "@reduxjs/toolkit";
import { radioChannels } from "../../data/radioChannels";

const initialState = {
  radioChannels: radioChannels,
  currentChannel: {},
};

export const currentChannelSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeChannel: (state, action) => {
      state.currentChannel = radioChannels.find(
        (channel) => channel.id === action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeChannel } = currentChannelSlice.actions;

export default currentChannelSlice.reducer;

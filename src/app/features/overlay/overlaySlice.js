import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overlay: {
    show: false,
    view: "",
    // title: "", // success error
    message: "",
  },

  confirmed: false,
  confirmed_action: "",
};

export const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setOverlay: (state, action) => {
      if (action.payload === true) {
        /// reset the payload
        state.overlay = {
          show: false,
          view: "",
          title: "",
          message: "",
        };
      } else {
        state.overlay = action.payload;
      }
    },

    // action.payload is an object
    setConfirmed: (state, action) => {
      state.confirmed = action.payload;
    },
    setConfirmedAction: (state, action) => {
      state.confirmed_action = action.payload;
    },

    setView: (state, action) => {
      state.overlay = action.payload;
    },
  },
});

export const { setOverlay, setConfirmed, setConfirmedAction } = overlaySlice.actions;
export default overlaySlice.reducer;

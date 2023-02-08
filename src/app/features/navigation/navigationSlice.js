import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav_size: "lg", //sm, lg, null
  mobile_view: false,
  // show_mobile_nav: false,
  side_status: "", // show_mobile, show_lg, hide
  show_mobile_nav: false,

  sidebar_display: true, // true = show, false = "hide"

  hide_header: false,
};

export const overlaySlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSideBarDisplay: (state, action) => {
      state.sidebar_display = action.payload;
    },
    setNavSize: (state, action) => {
      state.nav_size = action.payload;
    },

    setSideStatus: (state, action) => {
      state.side_status = action.payload.side_status;
      state.mobile_view = action.payload.mobile_view;
    },

    setShowMobileNav: (state, action) => {
      state.show_mobile_nav = action.payload;
    },

    setHideHeader: (state, action) => {
      state.hide_header = action.payload;
    },
  },
});

export const {
  setNavSize,
  setSideStatus,
  setShowMobileNav,
  setSideBarDisplay,
  setHideHeader,
} = overlaySlice.actions;
export default overlaySlice.reducer;

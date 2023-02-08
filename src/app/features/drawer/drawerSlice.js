import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  drawer_overlay: {
    show: false,
    view: "",
  },

  
  bottom_drawer_overlay: {
    show: false,
    view: "",
  },

  
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawerOverlay: (state, action) => {

      if(action.payload == true){
        state.drawer_overlay = {
          show: false,
          view: "",
        }
      }else{
        state.drawer_overlay = action.payload;
      }
    },

    setBottomDrawerOverlay: (state, action) => {

      if(action.payload == true){
        state.bottom_drawer_overlay = {
          show: false,
          view: "",
        }
      }else{
        state.bottom_drawer_overlay = action.payload;
      }
    },
   
  },
});

export const {setDrawerOverlay,setBottomDrawerOverlay } = drawerSlice.actions;
export default drawerSlice.reducer;

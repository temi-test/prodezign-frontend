import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  modal_overlay: {
    show: false,
    view: "",
  },
  
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOverlay: (state, action) => {

      if(action.payload == true){
        state.modal_overlay = {
          show: false,
          view: "",
        }
      }else{
        state.modal_overlay = action.payload;
      }
    },
    setView: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const {setModalOverlay } = modalSlice.actions;
export default modalSlice.reducer;

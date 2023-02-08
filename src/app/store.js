import { configureStore } from "@reduxjs/toolkit";
// import authReducer from '../features/auth/authSlice';
import authReducer from "../app/features/auth/authSlice";
import overlayReducer from "../app/features/overlay/overlaySlice";
import bootcampReducer from "../app/features/bootcamp/bootcampSlice";
import navigationReducer from "../app/features/navigation/navigationSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    bootcamp: bootcampReducer,
    overlay: overlayReducer,
    navigation: navigationReducer
  },
});

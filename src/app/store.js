import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import mobileMenuReducer from "../features/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mobileMenu: mobileMenuReducer,
  },
});

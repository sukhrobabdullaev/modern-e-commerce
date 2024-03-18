import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    handleOpen: (state) => {
      state.isOpen = true;
    },
    handleClose: (state) => {
      state.isOpen = false;
    },
  },
});
export const { handleOpen, handleClose } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const toggleGPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    signOutToggle : (state) => {
      state.showGPTSearch = false ;
    }
  },
});


export const {toggleGPTSearch , signOutToggle } = toggleGPTSlice.actions 
export default toggleGPTSlice.reducer ;
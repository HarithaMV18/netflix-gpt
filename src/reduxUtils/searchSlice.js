import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchToggle: false,
    getGptResults:null,
    searchResults:null
  },
  reducers: {
    enableSearch: (state, action) => {
      state.searchToggle = action.payload;
    },
    addSearchResults:(state,action)=>{
      const {getGptResults,searchResults}=action.payload
      state.getGptResults=getGptResults
      state.searchResults=searchResults
    }
  },
});
export const {enableSearch, addSearchResults} =searchSlice.actions
export default searchSlice.reducer

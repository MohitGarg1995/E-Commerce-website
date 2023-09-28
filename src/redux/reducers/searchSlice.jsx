import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "All",
  sortOrder: "asc",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateSort: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { updateSearch, updateCategory, updateSort } = searchSlice.actions;
export default searchSlice.reducer;

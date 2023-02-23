import { configureStore } from "@reduxjs/toolkit";
import RecipeListSlice from "./components/RecipeList/RecipeListSlice";

const store = configureStore({
  reducer:{
    recipeList:RecipeListSlice,
  }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import RecipeListSlice from "./components/recipeList/RecipeListSlice";

const store = configureStore({
  reducer:{
    recipeList:RecipeListSlice,
  }
})

export default store
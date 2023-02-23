import { createSlice } from "@reduxjs/toolkit";

const RecipeListSclice = createSlice({
  name:"RecipeList",
  initialState:{
    recipes:[],
    ingredients:[],
    isLogged:false
  },
  reducers:{
    setIsLoggedAction(state, actions){
      state.isLogged= actions.payload
    },
  }
})

export const { setIsLoggedAction} = RecipeListSclice.actions

export default RecipeListSclice.reducer
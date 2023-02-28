import { configureStore } from "@reduxjs/toolkit";
import ListContact from "./components/listContact";


const store = configureStore({
  reducer:{
    listContact:ListContact
  }
})

export default store
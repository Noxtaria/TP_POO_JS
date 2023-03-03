import { configureStore } from "@reduxjs/toolkit";
import FlashcardSlice from "./components/flashcards/FlashcardSlice";

const store = configureStore({
  reducer:{
    flashcard:FlashcardSlice
  }
})

export default store
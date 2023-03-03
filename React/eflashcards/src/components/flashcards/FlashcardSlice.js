import { createSlice } from "@reduxjs/toolkit";

const FlashcardSlice = createSlice({
  name: "Flashcard",
  initialState: {
    flashcards: [],
  },
  reducers: {
    addFlashcardAction(state, action) {
      state.flashcards.push({
        id: state.flashcards.length + 1,
        ...action.payload,
      });
    },
  },
});

export const { addFlashcardAction } = FlashcardSlice.actions;

export default FlashcardSlice.reducer;

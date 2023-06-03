import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      const noteId = action.payload.id;
      return state.filter((note) => note.id !== noteId);
    },
    updateNote: (state, action) => {
      const { id, title, text } = action.payload;
      const noteIndex = state.findIndex((note) => note.id === id);

      if (noteIndex !== -1) {
        state[noteIndex].title = title;
        state[noteIndex].text = text;
      }
    },
  },
});

export const { createNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"; // Import the reducer

export const store = configureStore({
  reducer: {
    movieData: movieReducer, // Use the imported reducer here
  },
});

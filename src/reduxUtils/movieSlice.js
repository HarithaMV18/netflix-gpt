import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    movieTrailer: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerKey: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies,addMovieTrailerKey } = movieSlice.actions;
export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    actionMovies: {},
    adventureMovies: {},
    familyMovies: {},
    comedyMovies: {},
    scienceFictionMovies: {},
    animationMovies: {},
    warMovies: {},
    movieBannerTrailer: {},
    movieTrailer: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    addAdventureMovies: (state, action) => {
      state.adventureMovies = action.payload;
    },
    addFamilyMovies: (state, action) => {
      state.familyMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addScienceFictionMovies: (state, action) => {
      state.scienceFictionMovies = action.payload;
    },
    addAnimationMovies: (state, action) => {
      state.animationMovies = action.payload;
    },
    addWarMovies: (state, action) => {
      state.warMovies = action.payload;
    },
    addMovieBannerTrailerKey: (state, action) => {
      state.movieBannerTrailer = action.payload;
    },
    addMovieTrailerKey: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addActionMovies,
  addAdventureMovies,
  addMovieBannerTrailerKey,
  addMovieTrailerKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addFamilyMovies,
  addComedyMovies,
  addScienceFictionMovies,
  addAnimationMovies,
  addWarMovies

} = movieSlice.actions;
export default movieSlice.reducer;

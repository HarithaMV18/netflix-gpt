import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    popularMovies: {},
    topRatedMovies:{},
    upcomingMovies:{},
    movieBannerTrailer: {},
    movieTrailer:{}

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies:(state,action)=>{
state.topRatedMovies=action.payload
    },
    addUpcomingMovies:(state,action)=>{
state.upcomingMovies=action.payload
    },
    addMovieBannerTrailerKey: (state, action) => {
      state.movieBannerTrailer = action.payload;
    },
    addMovieTrailerKey: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addMovieBannerTrailerKey,addMovieTrailerKey,addPopularMovies,addTopRatedMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;

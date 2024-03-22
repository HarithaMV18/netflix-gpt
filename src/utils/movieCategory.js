import { APIKEY } from "./constents"


const movieCategory = {
    now_playing:`movie/now_playing?api_key=${APIKEY}`,
    popular:`movie/popular?api_key=${APIKEY}`,
    top_rated:`movie/top_rated?api_key=${APIKEY}`,
    upcoming:`movie/upcoming?api_key=${APIKEY}`,
    action:`discover/movie?api_key=${APIKEY}&with_genres=28&page=2`,
    adventure:`discover/movie?api_key=${APIKEY}&with_genres=12&page=2`,
    family:`discover/movie?api_key=${APIKEY}&with_genres=10751`,
    comedy:`discover/movie?api_key=${APIKEY}&with_genres=35`,
    science_fiction:`discover/movie?api_key=${APIKEY}&with_genres=878`,
    animation:`discover/movie?api_key=${APIKEY}&with_genres=16`,
    war:`discover/movie?api_key=${APIKEY}&with_genres=10752`,
}

export default movieCategory

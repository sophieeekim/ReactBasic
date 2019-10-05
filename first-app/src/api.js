import axios from "axios";
import { pipeline } from "stream";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key:"fba12bb9d69cf036d5eb3f29a75ddd41",
        language: "en-US"
    }
});

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: (id) => 
    api.get(`tv/${id}`,{
        params :{
            append_to_response:"videos"
        }
    }),
    search: (term) => 
    api.get("search/tv", {
        params :{
            query: encodeURIComponent(term)
        }
    })
};

export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    topRated: () => api.get("movie/top_rated"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => 
    api.get(`movie/${id}`,{
        params :{
            append_to_response:"videos"
        }
    }),
    search: (term) => 
    api.get("search/movie", {
        params :{
            query: encodeURIComponent(term)
        }
    })
};

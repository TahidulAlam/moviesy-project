import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjA1NWUyMjEwMGNiYmRkNDY5MjAwMmYxODg1Zjg5YSIsInN1YiI6IjY0MzNhMjlkMzkxYjljMDA3NzQ3ODFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyTRlEj-hsnuxPYx-giTe0mLdOPB-CXedh5R-Jl9PgM";

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjA1NWUyMjEwMGNiYmRkNDY5MjAwMmYxODg1Zjg5YSIsInN1YiI6IjY0MzNhMjlkMzkxYjljMDA3NzQ3ODFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyTRlEj-hsnuxPYx-giTe0mLdOPB-CXedh5R-Jl9PgM

const headers = {
    Authorization: "bearer "  + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

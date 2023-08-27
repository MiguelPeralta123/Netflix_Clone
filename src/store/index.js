import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { MY_API_KEY, TMDB_BASE_URL } from '../utils/constant'

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
}

export const fetchGenres = createAsyncThunk('netflix/genres', async () => {
    const { data: { genres } } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`)
    return genres
})

const arrayOfMovieData = (movies, movies_array, genres) => {
    movies.forEach(movie => {
        const movie_genres = []
        movie.genre_ids.forEach(genre_id => {
            const found_genre = genres.find(({ id }) => id === genre_id)
            if (found_genre) movie_genres.push(found_genre.name)
        })
        if (movie.backdrop_path) {
            movies_array.push({
                id: movie.id,
                name: movie.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movie_genres.slice(1, 3)
            })
        }
    });
}

const getMovieData = async (api, genres, paging = false) => {
    const movies_array = []
    for (let i = 1; movies_array.length < 80 && i < 10; i++) {
        const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ``}`)
        arrayOfMovieData(results, movies_array, genres)
    }
    return movies_array
}

export const fetchMovies = createAsyncThunk('netflix/trending', async ({ type }, myThunk) => {
    const { netflix: { genres }, } = myThunk.getState()
    return getMovieData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`, genres, true)
})

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
            state.genresLoaded = true
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
})

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})
import fetch from 'node-fetch';

const API_URL = "https://yts.am/api/v2/list_movies.json?"

import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;

export const getMovie = async id => {
    const {
        data: {
          data: { movie }
        }
      } = await axios(MOVIE_DETAILS_URL, {
        params: {
          movie_id: id
        }
      });
      return movie;
}

export const getMovies = (limit, rating) => {
    console.log(limit)
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

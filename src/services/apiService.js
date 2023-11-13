import axios from "axios";

const apiReadKey = process.env.REACT_APP_API_READ_KEY;

const getNowPlayingMovies = async () => {
  const API_URL = "https://api.themoviedb.org/3/movie/now_playing";

  try {
    const response = await axios.get(API_URL, {
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: apiReadKey,
      },
    });

    console.log("response axios:", response);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export { getNowPlayingMovies };

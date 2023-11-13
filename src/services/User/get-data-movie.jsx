import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoints";

const fetchDataMovie = async (page) => {
  const { data } = await http.get(
    `${API_ENDPOINT.NOW_PLAYING}?page=${page ? page : 1}`
  );
  return data;
};

const useMovieDataQuery = (page) => {
  return useQuery(["userData", page], () => fetchDataMovie(page));
};

export { fetchDataMovie, useMovieDataQuery };

import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoints";

const fetchDataMovieSearch = async (page) => {
  const { data } = await http.get(
    `${API_ENDPOINT.DETAIL_MOVIE_SEARCH}?page=${page ? page : 1}`
  );
  return data;
};

const useMovieDataSearchQuery = (page) => {
  return useQuery(["userDataMovieSearch", page], () =>
    fetchDataMovieSearch(page)
  );
};

export { fetchDataMovieSearch, useMovieDataSearchQuery };

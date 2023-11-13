import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http3
    .get(_key)

    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      alert(err.response.status);
      if (err.response.status === 401) {
        window.location.href = "/login";
      }
    });

  return data;
};

// untuk Dinamis Handle
const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser };

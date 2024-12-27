import axiosIns from "../lib/axios";

export const getPokemon = async (searchParam) => {
  const response = await axiosIns({
    method: "GET",
    url: `pokemon/${searchParam}`,
  })
  return response.data;
}
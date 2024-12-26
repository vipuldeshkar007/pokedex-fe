import axiosIns from "../lib/axios";



export const getPokemonList = async (searchParam) => {
  const response = await axiosIns({
    method: "GET",
    url: `getPokemonList/${searchParam}`,
  })
  return response.data;
}
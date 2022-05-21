import axiosClient from "../../api/axios";

export const getStarWaresPlanets = async () => {
  const response = await axiosClient.get('./planets/');
  return response;
};
import axiosClient from "../../api/axios";

export const getStarWaresFilms = async () => {
  const response = await axiosClient.get('./films');
  return response;
};

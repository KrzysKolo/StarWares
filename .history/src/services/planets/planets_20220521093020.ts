import axiosClient from "../../api/axios";
import { Planet, Response } from "../../models/Planet";

export const getStarWaresPlanets = async () => {
  const planets: Planet[] = [];
  let counter = 1;
  let response: Response;
  try {
    do {
      response = (await axiosClient.get(`/people/?page=${counter++}`)).data;
      planets.push(...response.results)

    } while (response.next);
  }
  catch {
    planets.splice(0, planets.length);
  }
  return planets;



};
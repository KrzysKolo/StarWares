import { ItemMovieList } from "./ItemMovieList";

export type TableInfoPlanetsProps = {
  text: string;
  item: ItemMovieList;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}
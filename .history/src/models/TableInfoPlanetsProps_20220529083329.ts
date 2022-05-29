import { ItemMovieList } from "./ItemMovieList";
import { Planet } from "./Planet";

export type TableInfoPlanetsProps = {
  text: string;
  item: ItemMovieList;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}
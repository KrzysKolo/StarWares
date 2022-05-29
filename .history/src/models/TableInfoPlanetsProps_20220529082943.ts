import { Planet } from "./Planet";

export type TableInfoPlanetsProps = {
  text: string;
  item: Planet;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}
import { Planet } from "./Planet";

export type TableInfoPlanetsProps = {
  text: string;
  item: number;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}
import { Planet } from "./Planet";

export type SuggestionsListProps = {
  suggestions: Planet[],
  onClick: (value: string) => void,
}
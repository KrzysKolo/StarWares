import React from 'react';
import { Planet } from '../../../models/Planet';

export type SuggestionsListProps = {
  suggestions: Planet[],
  onClick: (value: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => string;
}
const SuggestionsList = ({ suggestions, onClick }) => {
  return (
    <div>SuggestionsList</div>
  )
}

export default SuggestionsList;
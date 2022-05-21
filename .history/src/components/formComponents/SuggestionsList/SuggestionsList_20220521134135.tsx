import React from 'react';
import { Planet } from '../../../models/Planet';

export type SuggestionsListProps = {
  suggestions: Planet[];
  onChange: React.MouseEvent<HTMLElement>;
};

const SuggestionsList = ({ suggestions, onClick }) => {
  return (
    <ul>
      { suggestions.map((item, i) => <li className="suggestion" key={i} onClick={onClick(item.name)}>{item.name}</li>) }
    </ul>
  )
}

export default SuggestionsList;
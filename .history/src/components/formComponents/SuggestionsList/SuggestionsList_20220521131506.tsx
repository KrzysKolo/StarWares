import React from 'react';
import { Planet } from '../../../models/Planet';

export type SuggestionsListProps = {
  suggestions: Planet[];
}
const SuggestionsList = ({ suggestions }) => {
  return (
    <ul>
      { suggestions.map((item, i) => <li className="suggestion" key={i} onClick={() => suggestionSelected(item.name)}>{item.name}</li>) }
    </ul>
  )
}

export default SuggestionsList;
import React from 'react';
import { Planet } from '../../../models/Planet';

export type SuggestionsListProps = {
  suggestions: Planet[];
}
const SuggestionsList = ({ suggestions }) => {
  return (
    <div>SuggestionsList</div>
  )
}

export default SuggestionsList;
import React, { MouseEvent } from 'react';
import { Planet } from '../../../models/Planet';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SuggestionsListStyles } from './SuggestionsList.module.scss';

const style = bemCssModules(SuggestionsListStyles);

export type SuggestionsListProps = {
  suggestions: Planet[],
  onClick: (value: string) => void,
}
const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onClick }) => {
  return (
    <div className={style()}>
      {
        suggestions.map((item, i) => <li className="suggestion" key={i} onClick={(value) => onClick(item.name)}>{item.name}</li>)
      }
    </div>
  )
}

export default SuggestionsList;
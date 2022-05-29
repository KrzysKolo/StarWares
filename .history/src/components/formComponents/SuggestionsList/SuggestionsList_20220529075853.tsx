import React, { MouseEvent } from 'react';
import { Planet } from '../../../models/Planet';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SuggestionsListStyles } from './SuggestionsList.module.scss';
import { SuggestionsListProps } from '../../../models/SuggestionsListProps';

const style = bemCssModules(SuggestionsListStyles);


const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions, onClick }) => {
  return (
    <div className={style()}>
      <div className={style('suggestionsWrapper')}>
        <ul>
          {
            suggestions.map((item, i) =>
              <li
                className="suggestion"
                key={i}
                onClick={(value) => onClick(item.name)}>{item.name}
              </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default SuggestionsList;
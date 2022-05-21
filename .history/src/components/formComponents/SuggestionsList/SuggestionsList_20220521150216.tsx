import React from 'react';
import { Planet } from '../../../models/Planet';
import { default as bemCssModules } from 'bem-css-modules';
import { default as SuggestionsListStyles } from './SuggestionsList.module.scss';

const style = bemCssModules(SuggestionsListStyles);

export type SuggestionsListProps = {
  suggestions: Planet[],
  onClick: (value: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => string;
}
const SuggestionsList = ({ suggestions, onClick }) => {
  return (
    <div className={style()}>
      {
        suggestions.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => <li className="suggestion" key={i} onClick={() => onClick(item.name)}>{item.name}</li>)
      }
    </div>
  )
}

export default SuggestionsList;
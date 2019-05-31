import React from 'react';

import Character from './Character';

import './StarWars.scss';

const CharacterList = props =>{
  return (
    <div className="char-list">
        <Character charInfo={props.charInfoList} />
    </div>
  )
}

export default CharacterList;
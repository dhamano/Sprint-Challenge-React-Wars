import React from 'react';

const Character = props => {
  console.log(props.charInfo);
  return (
    props.charInfo.map( (charInfo, i) => {
      return (
        <article className="char-item" key={i}>
          <h2>{charInfo.name}</h2>
          <dl>
            <dt>height:</dt>
            <dd>{charInfo.height}</dd>
            <dt>weight:</dt>
            <dd>{charInfo.mass}kg</dd>
            <dt>hair color:</dt>
            <dd>{charInfo.hair_color}</dd>
            <dt>skin color:</dt>
            <dd>{charInfo.skin_color}</dd>
          </dl>
        </article>
      )
    })
  )
}

export default Character;
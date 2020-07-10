import React from 'react';
import { useRequest } from '../useRequest'

export const Pokemon = ({ pokemon }) => {
  const { name } = pokemon
  const { data, error } = useRequest('/pokemon', name)

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="Card">
      <span className="Card--id">#{data.id}</span>
      <img
        className="Card--image"
        src={data.sprites.front_default}
        alt={name}
      />
      <h1 className="Card--name">{name}</h1>
      <span className="Card--details">
        {data.types.map((poke) => poke.type.name).join(', ')}
      </span>
    </div>
  );
};

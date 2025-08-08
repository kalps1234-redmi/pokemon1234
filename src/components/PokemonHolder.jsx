import React, { useEffect, useState } from "react";
import "./PokemonHolder.css";

const PokemonHolder = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  const getStat = (statName) =>
    pokemon.stats.find((stat) => stat.stat.name === statName)?.base_stat;

  return (
    <div className="card">
      <div className="icon">🔥 {/* Flame icon */}</div>
      <h2 className="name">{pokemon.name}</h2>
      <div className="types">
        {pokemon.types.map(({ type }) => (
          <span key={type.name} className={`type ${type.name}`}>
            {type.name.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="stats">
        <div className="stat stats-value">{getStat("hp")}</div>
        <div className="stat stats-value">{getStat("attack")}</div>
        <div className="stat stats-value">{getStat("defense")}</div>
      </div>
      <div className="stats">
        <div className="stat">HP</div>
        <div className="stat">Attack</div>
        <div className="stat">Defense</div>
      </div>
    </div>
  );
};

export default PokemonHolder;

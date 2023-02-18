import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, search}) {
  const updatedPokemons = pokemons.filter((pokemon)=> (
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {updatedPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id} pokemon={pokemon}
          />
        ))}
    </Card.Group>
  );
}

export default PokemonCollection;

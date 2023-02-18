import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons]= useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
    .then((r)=>r.json())
    .then((pokemons)=> setPokemons(pokemons))
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemons} search={search}/>
    </Container>
  );
}

export default PokemonPage;

import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [name, setName]= useState('')
  const [hp, setHp] = useState(0)
  const [frontImage, setFrontImage] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
  const [backImage, setBackImage] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')

  function handleFormSubmit(e){
    e.preventDefault()
    const pokemonData = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImage,
        back: backImage
      }
    }
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonData),
    })
    .then((r)=> r.json())
    .then((newPokemon)=> onAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
            onChange={(e)=> setName(e.target.value)}
          />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            onChange={(e)=> setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e)=> setFrontImage(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e)=> setBackImage(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

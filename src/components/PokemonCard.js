import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [frontImg, setFrontImg]=useState(pokemon.sprites.front)

  function handleCardClick(){
    frontImg === pokemon.sprites.front ? setFrontImg(pokemon.sprites.back) : setFrontImg(pokemon.sprites.front)
  }

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          <img alt="oh no!" src={frontImg}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

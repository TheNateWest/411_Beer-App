import React from 'react'
import Heart from "react-animated-heart";
import {useState} from "react";

function BeerCard({beer}) {
const [isClick, setClick] = useState(false);
  return (
    <div>
        <h4>
            {beer.name}
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </h4>
        <img src={beer.image_url} width={50}/>
        <p>abv: {beer.abv} | ibu: {beer.ibu}</p>
        <p>{beer.description}</p>
        <p>Best Paired With: {beer.food_pairing.join(", ")}</p>
    </div>

  )
}

export default BeerCard
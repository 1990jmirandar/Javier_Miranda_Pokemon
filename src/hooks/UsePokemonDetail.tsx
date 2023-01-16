import React from 'react'
import { useState, useEffect } from 'react';
import { PokemonDetailResponse } from '../interfaces/PokemonDetailInterface';

export const usePokemonDetail = (id: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemonDeatil, setpokemonDeatil] = useState<PokemonDetailResponse>({} as PokemonDetailResponse);

  const getDetailPokemon = async() => {
    setisLoading(true);
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await response.json();
    setpokemonDeatil(data)
    setisLoading(false);
  }

  useEffect(() => {
    getDetailPokemon();
  }, [])
  
  return {
    isLoading,
    pokemonDeatil
  }
}

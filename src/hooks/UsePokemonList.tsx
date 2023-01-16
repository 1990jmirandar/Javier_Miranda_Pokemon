import { useEffect, useRef, useState } from "react";
import { Pokemon, Result } from '../interfaces/PokemonInterface';

export const usePokemonList = () => {
    const nextPokemonList = useRef("https://pokeapi.co/api/v2/pokemon?limit=30");
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [pokemonListFilter, setPokemonListFilter] = useState<Pokemon[]>([]);
    const [isLoading, setisLoading] = useState(false);
    const getPokemon = async () => {
        pokemonList.length == 0 ? setisLoading(true) : setisLoading(false);
        setisLoading(true);
        const response = await fetch(nextPokemonList.current);
        const data = await response.json();
        const mapPokemonList = mapJsonToObject(data.results);
        nextPokemonList.current = data.next;
        setPokemonList([...pokemonList, ...mapPokemonList]);
        setPokemonListFilter([...pokemonList, ...mapPokemonList]);
        setisLoading(false);
    }

    const mapJsonToObject = (PokemonResult: Result[]) => {
        const pokemonList: Pokemon[] = PokemonResult.map(pokemon => {
            const splitPokemonUrl = pokemon.url.split("/");
            const idPokemon = splitPokemonUrl[splitPokemonUrl.length - 2];
            const urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + idPokemon + ".png";
            return {
                id: idPokemon,
                name: pokemon.name,
                url: pokemon.url,
                image: urlImage,
                color: generateColor()
            }
        });
        return pokemonList;
    }

    useEffect(() => {
        getPokemon();
    }, [])

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    return {
        pokemonList,
        isLoading,
        getPokemon,
        pokemonListFilter,
        setPokemonListFilter
    };
}


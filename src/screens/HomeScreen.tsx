import React from 'react'
import { View, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { style } from '../theme/AppTheme';


import { usePokemonList } from '../hooks/UsePokemonList';
import { Pokemon } from '../interfaces/PokemonInterface';
import { PokemonCard } from '../components/PokemonCard';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemonList, isLoading, getPokemon, pokemonListFilter, setPokemonListFilter} = usePokemonList();
  const [filter, setfilter] = useState("");

  const filterPokemon = (text: string) => {
    if (text) {
      const newListPokemon: Pokemon[] = pokemonList.filter((pokemon) => {
        const name = pokemon.name.toUpperCase();
        return name.indexOf(text.toLocaleUpperCase()) > -1;

      });
      setPokemonListFilter(newListPokemon);

    } else {
      setPokemonListFilter(pokemonList);
    }
    setfilter(text);
  }
  return (
    <>
      {
        isLoading ?
          <ActivityIndicator
            testID='loadingListPokemon'
            style={{ height: 100, flex: 1 }}
            size={20}
            color="black" />
          :
          <View
          testID='listPokemon'
            style={style.marginApp}>
            <FlatList
              data={pokemonListFilter}
              ListHeaderComponent={
                <View style={{ ...style.inputSearch, top: top + 22, marginBottom: 100 }}>
                  <TextInput
                    style={
                      style.inputTextSearch
                    }
                    placeholder="Buscar"
                    value={filter}
                    onChangeText={(text) => filterPokemon(text)}
                  />
                </View>
              }
              keyExtractor={(pokemon => pokemon.id)}
              renderItem={({ item }) =>
                <PokemonCard pokemon={item} />
              }
              onEndReached={filter ? null : getPokemon}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={
                filter ? null :
                  <ActivityIndicator
                    style={{ height: 100 }}
                    size={20}
                    color="black" />
              }
            />
          </View>
      }
    </>
  )
}

import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Type, PokemonDetailResponse, Ability } from '../interfaces/PokemonDetailInterface';
import { style } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
  pokemon: PokemonDetailResponse
}
export const PokemDetail = ({ pokemon }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={{
      ...StyleSheet.absoluteFillObject,
      
      }}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={style.subtitle}>Tipo de personaje</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map(({ type }) => {
              return (<Text
                style={style.text }
                key={type.name}>
                {type.name}
              </Text>
              )
            })
          }
        </View>
      </View>
      <View>
        <Text style={{...style.subtitle}}>Peso</Text>
        <Text style={{...style.text}}>{pokemon.weight} kg</Text>
      </View>
      <View>
        <Text style={{ ...style.subtitle }}>Sprites</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: pokemon.sprites.front_default }} style={style.spritesImage} />
          <Image source={{ uri: pokemon.sprites.back_default }} style={style.spritesImage} />
          <Image source={{ uri: pokemon.sprites.front_shiny }} style={style.spritesImage} />
          <Image source={{ uri: pokemon.sprites.back_shiny }} style={style.spritesImage} />
        </ScrollView>
      </View>
      <View>
        <Text style={{...style.subtitle}}>Movimientos</Text>
        <View style={{ alignItems:"flex-start", flexDirection: 'row', flexWrap:"wrap"}}>
          {
            pokemon.moves.map(({ move }) => {
              return (<Text
                style={{...style.text} }
                key={move.name}>
                {move.name}
              </Text>
              )
            })
          }
        </View>
      </View>
      <View style={{height:100}} />
    </ScrollView>
  )
}

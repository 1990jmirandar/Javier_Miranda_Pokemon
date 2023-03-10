import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { Pokemon } from '../interfaces/PokemonInterface';

export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: {pokemon: Pokemon}
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = ()  => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
          backgroundColor: 'white'
      }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
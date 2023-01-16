import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Pokemon } from '../interfaces/PokemonInterface';
import { style } from '../theme/AppTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
interface Props {
    pokemon: Pokemon
}
export const PokemonCard = ({ pokemon }: Props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
<TouchableOpacity onPress={() =>
            navigation.navigate('PokemonScreen', { pokemon: pokemon })
        }>
            <View
                style={{ ...style.cardContainer, backgroundColor: pokemon.color }}>
                <Image style={{ ...style.cardImage }}
                    source={{ uri: pokemon.image }} />
                <Text
                    style={{ ...style.cardName }}>
                    #{pokemon.id}</Text>
                <Text
                    style={{ ...style.cardName }}>
                    {pokemon.name}</Text>

            </View>

        </TouchableOpacity>
        </SafeAreaProvider>
        
    )
}

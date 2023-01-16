
import { View, Text, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';
import { usePokemonDetail } from '../hooks/UsePokemonDetail';
import { PokemDetail } from '../components/PokemDetail';
interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { top } = useSafeAreaInsets();
  const { pokemon } = route.params;
  const { isLoading, pokemonDeatil } = usePokemonDetail(pokemon.id);
  return (
    <View style={{
      flex: 1,
      backgroundColor: pokemon.color
    }}>
      <TouchableOpacity
        onPress={() => { navigation.pop() }}>
        <Image
          source={require('../images/back.png')}
          style={{
            ...style.backHeader,
            top: top,
          }}
        />
      </TouchableOpacity>
      <View style={{
        ...style.marginApp,
        alignItems: "center",
        top: top + 10
      }}>
        <Image
          style={style.headerImage}
          source={{ uri: pokemon.image }}
        ></Image>
        <Text
          style={style.subtitle}>
          # {pokemon.id}</Text>
        <Text
          style={style.subtitle}>
          Pokemon: {pokemon.name}</Text>
      </View>
      {isLoading ?
        <ActivityIndicator
          style={style.loading}
          size={50}
          color={"black"} />
        :
        <View style={{
          flex: 1,
          top: top + 20,
          ...style.marginApp
        }}>
          <PokemDetail pokemon={pokemonDeatil} />
        </View>
      }
    </View>
  )
}

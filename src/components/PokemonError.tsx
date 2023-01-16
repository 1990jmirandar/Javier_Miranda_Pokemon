import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
type Props = {
    message: string
    positiveButton: {
        actionHandle: () => void,
        textButton: string,
    }
}
export const ErrorPokemon = ({ message, positiveButton }: Props) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: "black", opacity: 0.9}}>
            <Text style={{
                color: "white",
                fontSize: 16
            }}>
                {message}
            </Text>

            <TouchableOpacity style={{
                elevation: 8,
                top: 20,
                backgroundColor: "#009688",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
            }}
                onPress={positiveButton.actionHandle}>
                <Text>{positiveButton.textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

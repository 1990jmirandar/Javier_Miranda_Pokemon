import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    marginApp:{
        marginHorizontal: 16
    },
    title:{
        fontSize: 35,
        fontWeight: "bold"
    },
    cardContainer:{
        marginHorizontal: 10,
        backgroundColor: "red",
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 20,
        alignItems: "center"

    },
    cardName:{
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        top: 10
    },
    cardImage:{
        width: 60,
        height: 60,
        top: 10
    },
    headerImage:{
        width: 150,
        height: 150,
        top: 10
    },
    subtitle:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    text:{
        color: "white",
        fontSize: 16,
        marginTop: 10
    },
    backHeader:{
        height: 30,
        width: 30,
        left: 16
    },
    loading:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    spritesImage:{
        width: 60,
        height: 100,
        
    },
    inputSearch:{
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#003322',
        backgroundColor: 'white'

    },
    inputTextSearch:{
        fontSize: 20,
        marginTop: 7,
        color: 'black',
        alignItems: "flex-start"
    }
});

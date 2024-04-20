import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {

    return(
        <View style={Style.Display}>
            <Text style={Style.DisplayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}


const Style = StyleSheet.create({

    Display:{
        flex: 1,
        backgroundColor: "gray",
        alignItems: "flex-end",
        width: "100%",
        justifyContent: "center"
    },

    DisplayValue:{
        fontSize: 60,
        color: "#fff",
        
    }
})
import React from "react"
import { Dimensions, StyleSheet, TouchableHighlight, Text } from "react-native"

export default props => {

    const Style = StyleSheet.create({

        Square:{ //Esse é o quadrado padrão, a maioria vai ter essas propriedades
            fontSize: 40,
            height: Dimensions.get('window').width / 4,
            width: Dimensions.get('window').width / 4,
            borderWidth: 1,
            borderColor: '#888',
            textAlign: "center",
            backgroundColor: "#f0f0f0",
            padding: 20,
    
        },
    
        OperationButton:{
            //backgroundColor: "#fa8231",
            backgroundColor: "orange",
            color: "#fff"
        },
    
        ButtonDouble:{
            width: Dimensions.get('window').width / 4 * 2,
        },
    
        ButtonTriple:{
            width: Dimensions.get('window').width / 4 * 3,
        },
        
    
    })

    //Parte dos componentes
    const DefaultStyle = [Style.Square] //Esse é um array com o valor padrão do style.
    //Com esses if's abaixo nós conseguimos adicionar mais propriedades de design, além da padrão acima, porque ele é um array.

    if(props.operation) {DefaultStyle.push(Style.OperationButton)} //O push é pra adicionar no próximo índice livre.
    if(props.double) {DefaultStyle.push(Style.ButtonDouble)}
    if(props.triple) {DefaultStyle.push(Style.ButtonTriple)}
    

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={DefaultStyle}>{props.label}</Text>    
        </TouchableHighlight>
    )

}



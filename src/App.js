import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import CustomButton from "./CustomButton"
import Display from "./Display"


export default props => {
    
   const [initialState, setState] =  useState({

    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: ['', ''],
    currentIndex: 0
   })

   function resetCalculator (){
    setState(prevState=> ({
        ...prevState,
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: ['', ''],
        currentIndex: 0
    }))
   }



    function addValue (n){
            if (n === '0' && initialState.displayValue === '0'){
                resetCalculator()
                return
            }
    
            if (n === '.' && initialState.displayValue === '0'){
                resetCalculator()
                return
            }
    
            if (n === '.' && initialState.displayValue.includes('.')){
                return 
            }
            
            setState(prevState=> ({
                ...prevState,
                //(Anotação importante) essa sintaxe a seguir é uma operaçao ternária, é a mesma coisa do if só que mais resumido.
                //o setState nao aceita um if dentro da operação, entao essa foi a solução pra fazer a condição abaixo. Vou anotar melhor:
                
                displayValue: initialState.clearDisplay === true ? n  //O clearDisplay se initialState é true? Então armazene o "n" em displayValue.
                : initialState.displayValue === '0' ? n //Resumido: se o valor for igual a 0, a gente substitui por "n"/*
                : initialState.displayValue + n, //Caso não seja, a gente concatena as strings. É if e else praticamente, só muda a sintaxe.*/

                values: [
                    initialState.currentIndex === 0 ? initialState.values[0] + n : initialState.values[0],
                    initialState.currentIndex === 1 ? initialState.values[1] + n : initialState.values[1]
                ],  
                clearDisplay: false
            }))


    }

    

    function setOperation (operation) {
            if (initialState.currentIndex === 0){
                setState(prevState => ({
                    ...prevState,
                    clearDisplay: true,
                    operation: operation,
                    currentIndex: 1,
                }))
            }
            else{
                setState(prevState => ({
                    ...prevState,
                    clearDisplay: true,
                    operation: operation,
                }))
            }
    }

    function getResult(){
        if (initialState.values[0] != '' && initialState.values[1] != ''){
            const result = eval(`${initialState.values[0]} ${initialState.operation} ${initialState.values[1]}`)

            setState(prevState=> ({
                ...prevState,
                values: [
                    initialState.currentIndex === 1 ? result : initialState.values[0],
                    ''  //Limpando o indice [1] para o próximo número
                ],
                displayValue: result,
                    clearDisplay: true,
                    currentIndex: 1,
            }))
            
                return 
        }
        else{
            return
        }
    }

    return(
        <SafeAreaView style={Style.Container}>
            <Display value={initialState.displayValue}></Display>
            <View style={Style.ButtonsArea}>
                <CustomButton label="AC" triple onClick={resetCalculator}/>
                <CustomButton label="/" operation onClick={() => setOperation('/')}/>
                <CustomButton label="7" onClick={() => addValue('7')}/>
                <CustomButton label="8"onClick={() => addValue('8')}/>
                <CustomButton label="9"onClick={() => addValue('9')}/>
                <CustomButton label="*" operation onClick={() => setOperation('*')}/>
                <CustomButton label="4" onClick={() => addValue('4')}/>
                <CustomButton label="5" onClick={() => addValue('5')}/>
                <CustomButton label="6" onClick={() => addValue('6')}/>
                <CustomButton label="-" operation onClick={() => setOperation('-')}/>
                <CustomButton label="1" onClick={() => addValue('1')}/>
                <CustomButton label="2" onClick={() => addValue('2')}/>
                <CustomButton label="3" onClick={() => addValue('3')}/>
                <CustomButton label="+" operation onClick={() => setOperation('+')}/>
                <CustomButton label="0" double onClick={() => addValue('0')}/>
                <CustomButton label="." onClick={() => addValue('.')}/>
                <CustomButton label="=" operation onClick={getResult}/>
            </View>

        </SafeAreaView>
        
    )
}


const Style = StyleSheet.create({

    Container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
    },

    ButtonsArea:{
        flexDirection: "row",
        flexWrap: "wrap"
    },


})
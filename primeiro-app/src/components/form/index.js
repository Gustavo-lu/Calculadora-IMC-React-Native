
import React,{useState} from "react";
import {  Text, View, TextInput, TouchableOpacity  } from "react-native";
import ResultImc from "./resultIMC";
import stylesform from "./styleform";

export default function Form(){

const [height, setHeight ]=useState(null)
const [weight,setWeight]=useState(null)
const [messageImc,setMessageImc]=useState("Preencha peso e altura")
const [imc,setImc]=useState(null)
const [Textbutton ,setTextButton]=useState("Calcular")


function validationImc(){
    if(weight != null && height != null){
        calulator_imc()
        setWeight(null)
        setHeight(null)
        setMessageImc("Seu Imc é igual :")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha peso e altura!")

    function calulator_imc(){
        return setImc((weight/(height*height)).toFixed(2))
    }
}

    return(
        <View style={stylesform.formcontext}>
            <View style={stylesform.form}>
            <Text style={stylesform.formlabel}>Altura</Text>
            <TextInput style={stylesform.forminput} onChangeText={setHeight} value={height} placeholder="Ex: 1.80" keyboardType="numeric"/>

            <Text style={stylesform.formlabel}>Peso</Text>
                <TextInput style={stylesform.forminput} onChangeText={setWeight} value={weight} placeholder="Ex: 60.00" keyboardType="numeric"/>
                <TouchableOpacity style={stylesform.Button} onPress={()=>{
                    validationImc()
                }}>
                <Text style={stylesform.textButtonCal}>Calcular</Text>
                </TouchableOpacity>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );

}
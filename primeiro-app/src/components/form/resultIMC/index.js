import React from "react";
import { Text, View } from "react-native";
import stylesimc from "./style"


export default function ResultImc(props){
    return(
        <View style={stylesimc.resultimc}>
            <Text style={stylesimc.information}>{props.messageResultImc}</Text>
            <Text style={stylesimc.numero}>{props.resultImc}</Text>
            
        </View>

    );

}
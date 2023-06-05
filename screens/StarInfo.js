import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
import axios, {isCancel, AxiosError} from 'axios';
getAPOD = () => {
    axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=NAWbhy77tWWPGDFY4xRmsvdnpKPWB98qjpANYnSM")
        .then(response => {
            this.setState({aircrafts : response.data.results})
            console.log(response.data.results)
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
}

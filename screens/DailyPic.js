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
            this.setState({apod:response.data})
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
}
export default class DailyPicScreen extends Component{
    render(){
        return(
            <View>
                <SafeAreaView/>
                <ImageBackground
                source={require('../assets/stars.gif')}>
                    <Text>Astronomy picture of the day</Text>
                    <Text>{this.state.apod.url}</Text>
                    <TouchableOpacity onPress = {() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
                        <View>
                            <Image source={require("../assets/play-video.png")}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}
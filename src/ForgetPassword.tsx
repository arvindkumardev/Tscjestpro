import React,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";
import { Auth } from '../src';
import constants from './locales/constants';

const ForgetPassword = () => {
    const [email, setEmail] = useState<any>()

    return(
        <SafeAreaView style={style.mainView}>
        <View style={style.center}>
            <Text style={style.resetPassword}>{constants.ResetPassword}</Text>
            <TextInput 
            style={style.inputText}
            placeholder="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            />
           
            <TouchableOpacity style={style.buttonView} onPress={()=> Auth.forgetPassword(email)}>
                <Text style={style.buttonText}>{constants.ForgetPassword}</Text>
                </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainView: {
        flex: 1, 
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center'
    },
    resetPassword: {
        fontSize: 40, 
        fontWeight: "bold", 
        textAlign: 'center', 
        color: 'green',
    },
    inputText: {
        borderRadius: 5,
                backgroundColor: "white",
                width: "90%",
                height: 70,
                paddingLeft: 10,
                borderColor: "#000",
                borderWidth: 3,
                marginTop: 50,
    },
    buttonView: {
        backgroundColor: "green",
                borderRadius: 5,
                width: "90%",
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 80,
    },
    buttonText: {
        color: '#fff',
    fontWeight: "bold",
    fontSize: 22,
    },
});
export default ForgetPassword;
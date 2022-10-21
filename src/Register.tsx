import React,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";
import Auth from "./Auth";
import constants from './locales/constants';

type signtype = {
    username: string,
    email: any,
    password: any,
}

const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return(
        <SafeAreaView style={style.mainView}>
        <View style={style.center}>
            <Text style={style.signUpTopText}>{constants.SignUp}</Text>
            <TextInput 
            style={style.nameTextInput}
            placeholder="Full Name"
            value={username}
            onChangeText={(e:any) => setUsername(e)}
            />
            <TextInput 
            style={style.inputTextStyle}
            placeholder="Email"
            value={email}
            onChangeText={(e:any) => setEmail(e)}
            />
            <TextInput 
            style={style.inputTextStyle}
            placeholder="Password"
            value={password}
            onChangeText={(e:any) => setPassword(e)}
            />
            <TouchableOpacity style={style.signUpView} onPress={()=> Auth.SignUp(username, email, password)}>
                <Text style={style.signUpText}>{constants.SignUp}</Text>
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
     signUpTopText: {
        fontSize: 40, 
        fontWeight: "bold", 
        textAlign: 'center', 
        color: 'green',
     },
     nameTextInput: {
        borderRadius: 5,
        backgroundColor: "white",
        width: "90%",
        height: 70,
        paddingLeft: 10,
        borderColor: "#000",
        borderWidth: 3,
        marginTop: 50,
     },
     inputTextStyle: {
        borderRadius: 5,
        backgroundColor: "white",
        width: "90%",
        height: 70,
        paddingLeft: 10,
        borderColor: "#000",
        borderWidth: 3,
        marginTop: 20,
     },
     signUpView: {
        backgroundColor: "green",
        borderRadius: 5,
        width: "90%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
     },
     signUpText: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 22,
     },
});
export default Register;
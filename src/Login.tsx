import React,{useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';
// import Auth from "./Auth";
import { Auth } from '../src';
import constants from './locales/constants';


type InputTextProps = {
    setText?: any;
    placeholderText?: string;
    secureText?: boolean;
    keyboardEntry?: boolean;
  };
  

const Login = () => {
    const [email, setEmail] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const [list, setList] = useState<any>();
    const navigation = useNavigation<any>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data) => { setList(data)})
    }, [])

    return(
        <SafeAreaView style={style.mainView}>
        <View style={style.center}>
            <Text style={style.loginTopText}>{constants.Login}</Text>
            <TextInput 
            style={style.inputText}
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
            />
            <TextInput 
            style={style.passwordInput}
            placeholder="Password"
            secureTextEntry = {true}
            value={password}
            onChangeText={(password) => setPassword(password)}
            />
            <View style={style.row}>
            <Text style={style.donthaveText}>{constants.DontHaveAccount} </Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
            <Text style={style.registerHere}>{constants.RegisterHere}</Text>
            </TouchableOpacity>
            {/* <FlatList 
                 data={list}
                 keyExtractor={(listItem: listItemType) => {return listItem.id.toString();  }}
                 renderItem={({item})=> { return <Text style={{color: "green"}}>{item.title}</Text> } }
                /> */}
            </View>
           
            <TouchableOpacity style={style.loginView}
                onPress={()=> Auth.SignIn(email, password)}>
                <Text style={style.loginText}>{constants.Login}</Text>
                
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={()=> navigation.navigate("ForgetPassword")}>
            <Text style={style.registerHere}>{constants.ResetPassword}</Text>
            </TouchableOpacity> */}
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
        alignItems: 'center',
    },
    loginTopText: {
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
    passwordInput: {
        borderRadius: 5,
                backgroundColor: "white",
                width: "90%",
                height: 70,
                paddingLeft: 10,
                borderColor: "#000",
                borderWidth: 3,
                marginTop: 20,
    },
    row: {
        flexDirection: 'row'
    },
    donthaveText: {
        fontSize: 14, 
        marginTop: 10,
    },
    registerHere: {
        fontSize: 14, 
        marginTop: 10, 
        color: 'green',
    },
    loginView: {
        backgroundColor: "green",
                borderRadius: 5,
                width: "90%",
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 80,
    },
    loginText: {
        color: '#fff',
    fontWeight: "bold",
    fontSize: 22,
    },
});
export default Login;
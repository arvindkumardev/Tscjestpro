import { NavigationContainer } from "@react-navigation/native";
import React,{ useEffect, useState } from "react";
import {View, Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Auth } from '../src';
import axios from 'axios';
import { BASE_URL } from './Configration/BaseUrl';
import { END_URL } from './Configration/EndUrl';
import constants from './locales/constants';

type itemType = {
    userID: number;
    id: number;
    title: string;
    body: string;
}

type GetPostResponse = {
    data: Post[];
  };

   type Post = {
    userId: number;
    id: number;
    title: any;
    body: any;
  };

const Dashboard = () => {
    const [list, setList] = useState<any>([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) =>  setList(data))
    //   axios
    //   .get<GetPostResponse>(`${BASE_URL}${END_URL.POST}`)
    //   .then((res) => {
    //     setList(res?.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    }, [])

    const renderList = ({item}:any) => {
        return(
          <View style={{marginHorizontal: 10, marginTop: 20}}>
              <Text style={style.listDataText}>{constants.Id} {item.id}</Text>
              <Text style={style.listDataText}>{constants.Title} {item.title}</Text>
              <Text style={style.listDataText}>{constants.Description} {item.body}</Text>
              <TouchableOpacity onPress={()=> navigation.navigate("Post", {Item: item})}>
              <Text style={style.listViewMoreText}>{constants.ViewMore}</Text>
              </TouchableOpacity>
          </View>
        );
    }
    return(
        <SafeAreaView style={style.mainView}>
        <View>
        <TouchableOpacity onPress={()=> Auth.signOut()}>
        <Text style={style.signOut}>{constants.SignOut}</Text>
        </TouchableOpacity>
            <FlatList 
             data={list}
             keyExtractor={(item: itemType) => {return item.id.toString()}}
             renderItem={renderList}
            />
        </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    listDataText: {
        fontSize: 16, 
        color: "#000",
    },
    listViewMoreText: {
        fontSize: 16, 
        color: "blue",
    },
    mainView: {
        flex: 1, 
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center'
    },
    signOut: {
        fontSize: 16, 
        marginTop: 50,
        fontWeight: "bold",
        color: "green",
        textAlign: "right", 
        marginHorizontal: 30,
    },
  });

export default Dashboard;
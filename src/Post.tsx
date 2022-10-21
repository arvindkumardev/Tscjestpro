import React,{ useEffect } from "react";
import {View, Text, InteractionManager, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';
import constants from "./locales/constants";

const Post = () => {
    const route = useRoute<any>();

    useEffect(()=> {
       const {Item} = route.params;
    }, [])
    return(
       <View style={{marginHorizontal: 10, marginTop: 10}}>
           <Text style={style.text}>{constants.Id} {route.params.Item.id}</Text>
           <Text style={style.text}>{constants.Title} {route.params.Item.title}</Text>
           <Text style={style.text}>{constants.Description} {route.params.Item.body}</Text>
       </View>
    );
}

const style = StyleSheet.create({
     text: {
        fontSize: 16, 
        color: "#000", 
        marginTop: 5,
     }
});
export default Post;
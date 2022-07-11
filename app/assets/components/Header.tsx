import React, { JSXElementConstructor, useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import IsOnline from './IsOnline';
import { IOnline } from '../types';
import { OnlineUsers } from '../../../demoJSON';

const Header:JSXElementConstructor<{imageUri:string}>=({imageUri})=>{
    const [text,setText]=useState('')
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarHalf}>
                    {/* Image of profile pic */}
                    <Image
                        source={{
                        uri:
                            // uri will eventually equal imageUri
                            'https://picsum.photos/seed/picsum/200/300',
                        }}
                        //borderRadius style will help us make the Round Shape Image
                        style={styles.avatarPic}
                    />
                    <Text style={styles.chatText}>Chats</Text>
                </View>
                <View style={styles.editHalf}>
                    {/* Image of camera icon */}
                    <Entypo name="camera" size={24} color="black" />
                    {/* image of edit icon */}
                    <MaterialIcons name="edit" size={24} color="black" />
                </View>
            </View>
            <View >
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={(searchString)=>setText(searchString)}
                    value={text}
                    underlineColorAndroid="transparent"
                />
            </View>
            <ScrollView>
                <FlatList
                horizontal
                style={styles.online}
                data={OnlineUsers as IOnline[]}
                renderItem={({item})=><IsOnline online={item}/>}
                />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    avatarHalf:{
        flexDirection:'row',
        alignItems:'center',
    },
    avatarPic:{
        width: 34, 
        height: 34, 
        borderRadius: 34 / 2,
        marginHorizontal:10
    },
    chatText:{
        fontSize:30,
        marginLeft:10,
        fontWeight:'bold'
    },
    container:{
        paddingBottom:20
    },
    editHalf:{
        flexDirection:'row',
        width:70,
        justifyContent:'space-between',
        marginRight:10
    },
    header:{
        marginTop:50,
        // flex:1,
        width:Dimensions.get('window').width,
        flexDirection:'row',
        // height:50,
        justifyContent:'space-between',
        alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:15,
        backgroundColor:'#FFFDFA',
        padding: 10,
    },
    online:{
        // flex:1,
        flexDirection:'row',
        // justifyContent:'space-between',
        width:Dimensions.get('window').width,
    }
    
})
export default Header;
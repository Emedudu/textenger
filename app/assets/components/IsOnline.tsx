import React, { JSXElementConstructor } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { IOnline } from '../types';
const IsOnline:JSXElementConstructor<{online:IOnline}>=({online})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.avatar}
                    source={{
                    uri:
                        // uri will eventually equal online.avatar
                        'https://picsum.photos/seed/picsum/200/300',
                    }}
                    //borderRadius style will help us make the Round Shape Image
                />
            </TouchableOpacity>
            <Text>
                {online.name}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    avatar:{
        width: 40, 
        height: 40, 
        borderRadius: 40 / 2,
        marginHorizontal:10
    },
    container:{
        width:70,
        alignItems:'center'
    }
})
export default IsOnline;
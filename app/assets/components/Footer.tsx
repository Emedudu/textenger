import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer=()=> {
    return (
        <View style={styles.container}>
            <Ionicons name="chatbubble" size={24} color="blue" />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        // position:'absolute',
        // marginBottom:200,
        zIndex:100,
        borderWidth:1
    }
})
export default Footer;
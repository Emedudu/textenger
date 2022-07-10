import React, { JSXElementConstructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header:JSXElementConstructor<{}>=()=>{
    return (
        <View style={styles.container}>
            <View>
                {/* Image of profile pic */}
                <Text style={styles.chatText}>Chats</Text>
            </View>
            <View>
                {/* Image of camera icon */}
                {/* image of edit icon */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flex:1,
        flexDirection:'row',
        height:50,
        justifyContent:'space-between'
    },
    chatText:{
        fontSize:50
    }
})
export default Header;
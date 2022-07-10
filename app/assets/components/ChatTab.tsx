import React, { JSXElementConstructor } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { IChatTab } from '../types';

const ChatTab:JSXElementConstructor<{chat:IChatTab}>=({chat})=> {
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{chat.name}</Text>
            <Text style={styles.avatar}>{chat.avatar}</Text>
            <Text style={styles.lastMessage}>{`${chat.sender?'You: ':''}${chat.lastMessage} ${chat.timeStamp}`}</Text>
            <Text style={styles.readMark}>{chat.readMark}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        height:100,
        borderColor:'red',
        borderWidth:1,
        width:Dimensions.get('window').width,
        flexDirection:'row',
        position:'relative',
    },
    name:{
        position:'absolute',
        top:10,
        left:70
    },
    avatar:{
        position:'absolute',
        top:10,
        left:5
    },
    lastMessage:{
        position:'absolute',
        top:40,
        left:70
    },
    readMark:{
        position:'absolute',
        bottom:10,
        right:40
    },
})
export default ChatTab;
import React, { JSXElementConstructor } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { IChatTab } from '../types';

const ChatTab:JSXElementConstructor<{chat:IChatTab}>=({chat})=> {
    
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.name}>{chat.name}</Text>
                <Image
                    style={styles.avatar}
                    source={{
                    uri:
                        // uri will eventually equal chat.avatar
                        'https://picsum.photos/seed/picsum/200/300',
                    }}
                    //borderRadius style will help us make the Round Shape Image
                />
                <Text style={styles.lastMessage}>{`${chat.sender?'You: ':''}${chat.lastMessage} ${chat.timeStamp}`}</Text>
                <Text style={styles.readMark}>{chat.readMark}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        height:75,
        // borderColor:'red',
        // borderWidth:1,
        width:Dimensions.get('window').width,
        flexDirection:'row',
        position:'relative',
    },
    name:{
        position:'absolute',
        top:20,
        left:70
    },
    avatar:{
        position:'absolute',
        top:17,
        left:5,
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    lastMessage:{
        position:'absolute',
        top:45,
        left:70
    },
    readMark:{
        position:'absolute',
        bottom:15,
        right:40
    },
})
export default ChatTab;
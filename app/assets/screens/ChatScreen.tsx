import React from 'react';
import { View } from 'react-native';
import ChatsView from '../components/ChatsView';
import Header from '../components/Header';

const ChatScreen=()=> {
    return (
        <View>
            <Header imageUri=''/>
            <ChatsView/>
        </View>
    );
}

export default ChatScreen;
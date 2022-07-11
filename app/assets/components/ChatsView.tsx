import React, { JSXElementConstructor } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { ChatTabs } from '../../../demoJSON';
import { IChatTab } from '../types';
import ChatTab from './ChatTab';

const ChatsView:JSXElementConstructor<{}> =(props)=>{
    return (
            <FlatList
            style={styles.container}
            data={ChatTabs as IChatTab[]}
            renderItem={({item})=><ChatTab chat={item}/>}
            />
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop:150,
    }
})
export default ChatsView;
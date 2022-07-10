import { JSXElementConstructor } from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ChatsView from './app/assets/components/ChatsView';
import Header from './app/assets/components/Header';

const App:JSXElementConstructor<{}>=()=>{
  console.log('what!')
  return (
    <View style={styles.container}>
      <Header/>
      <ChatsView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
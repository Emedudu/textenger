import { JSXElementConstructor } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Footer from './app/assets/components/Footer';
import ChatScreen from './app/assets/screens/ChatScreen';

const App:JSXElementConstructor<{}>=()=>{
  
  return (
    <View style={styles.container}>
      <Router>
        <Scene key = "root">
          <Scene key = "home" component = {ChatScreen} title = "Home" initial = {true} />
          {/* <Scene key = "about" component = {About} title = "About" /> */}
        </Scene>
      </Router>
      {/* <Footer/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
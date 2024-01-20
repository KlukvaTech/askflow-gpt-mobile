import { StyleSheet, View } from 'react-native';
import AskflowGPT from './src';
import Upload from './src/upload';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="AskflowGPT" 
      screenOptions={
        {
          headerShown: true
        }
  
      }>
        <Drawer.Screen name="Upload Docs" component={Upload} />
        <Drawer.Screen name="AskflowGPT" component={AskflowGPT} />
      </Drawer.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React,{ useEffect }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  Styled,
  TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Login from './screens/Login';
import Join from './screens/Join';
import SearchPW from './screens/SearchPW';

import { Provider } from 'react-redux';
import createStore from './createStore';

const store = createStore();
const Stack = createStackNavigator();

const App = () => {
//스크린 이미지를 3초후에 종료.
  useEffect(() => {
    setTimeout(function(){
      SplashScreen.hide();
    },3000);
    
  }, []);

  return (

    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
                headerShown: false,
              }}/>
        <Stack.Screen name="SearchPW" component={SearchPW} options={{
               headerTitle:'비밀번호 찾기',
               headerStyle: {
                 backgroundColor: '#41BD40',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
                 fontSize:30,
                 alignSelf: 'center' ,
               },
               headerRight: () => (
                 <View></View>
              ),
              }}/>
        <Stack.Screen name="Login" component={Login} options={{
               headerTitle:'로그인',
               headerStyle: {
                 backgroundColor: '#41BD40',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
                 fontSize:30,
                 alignSelf: 'center' ,
               },
               headerRight: () => (
                 <View></View>
              ),
              }}/>
        <Stack.Screen name="Join" component={Join} 
         options={{
          headerTitle:'회원가입',
          headerStyle: {
            backgroundColor: '#41BD40',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center' ,
          },
          headerRight: () => (
            <View></View>
         ),
         }}/>
         
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );


};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'#41BD40',
    position:'relative',
    justifyContent:'center',
    flex:1,
    width:'100%'
  },
  backbtn:{
    fontSize:40,
    paddingBottom:15,
    color:'white'
  },
  titleTxt:{
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'white'
  }
});


export default App;

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
/*
- 로그인
table : user(id, pw)
input : 사용자 로그인 타입, 아이디, 비번
output : true/false

- 구매코드입력(5자리)
table : purchasecode(codenumber)
output : true/false

- 전화문의 : 0507-1484-7177
- 이메일상담 : info@tripsoda.com
- 나의 투어일정 리스트
지역이름->투어타이틀, 대표투어이미지, 출발시점, 기간(소요시간), 대표이미지
구매코드테이블 join 구매관리 join 구매관광지 join 관광지 join 관광지사진
sorting(투어날짜순으로 정렬), 하단에 지난 투어일정 나오기.
- 상세투어일정
전체 투어일정 리스트(대표투어코드 정보)
- 상세관광지정보
주소(지도:위도경도), 전화번호, 오디오 가이드듣기, 스크롤 뷰
- 오디오 가이드상세듣기 
- 메세지리스트, 검색, 
*/
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

import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';




const Main = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>메인</Text>
        </View>
    );

};

    
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    fontFamily: 'THEBluewindRegular',
    alignItems:'center',
    backgroundColor:'#41BD40'
  },
 
});
export default Main;
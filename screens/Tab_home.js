<script src="http://localhost:8097"></script>
import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';




const Tab_home = ({ navigation }) => {

    return (
        <View style={styles.container}>
           <Text>home</Text>
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
export default Tab_home;
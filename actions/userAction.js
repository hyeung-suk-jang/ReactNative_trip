import {URL}  from '../constant'
import api from "../api"

//import { AsyncStorage } from '@react-native-community/async-storage';

export const loginAction = (data,navigation) => async (dispatch) => {
    try {
        const resToken = await api.post("/login", data);
        const token = resToken.data.token;
        console.log(token);
        if(token){
            navigation.navigate('Main')
        }
        
    } catch (e) {
        console.log(e.response.data.error);
    }
};


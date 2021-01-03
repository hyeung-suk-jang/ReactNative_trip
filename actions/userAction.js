import {URL}  from '../constant'
import api  from '../api'


export const loginAction = (data) => async (dispatch) => {
    try {
        const resToken = await api.post(URL+"/login", data);
        const token = resToken.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        
        history.push("/");
    } catch (e) {
        toast.error(e.response.data.error);
    }
};


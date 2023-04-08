import axios from "axios";
import { LOGIN_LOADING, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./authActionType";

export let getRegister = (cred) => async(dispatch) => {
    dispatch({ type: REGISTER_LOADING})
    try {
        let response = await axios.post(`https://reqres.in/api/register` ,cred);
        dispatch({ type : REGISTER_SUCCESS , payload : response.data});
        console.log(response.data)
        return response.data;
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE , payload: error.message})
    }
}

export let getLogin = ({payload, toaster}) => async(dispatch) => {
    dispatch({ type : LOGIN_LOADING});
    try {
        let response = await axios.post(`https://reqres.in/api/login` , payload);
        if(response){
        dispatch({ type : REGISTER_SUCCESS , payload: response.data});
        toaster.successToast();
        console.log(response.data)
        return response.data;
        }
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE , payload : error.message});
        console.log(error.message)
        
    }
}


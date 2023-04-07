import axios from "axios";
import { LOGIN_LOADING, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./authActionType";

export let getRegister = (cred) => async(dispatch) => {
    dispatch({ type: REGISTER_LOADING})
    try {
        let response = await axios.post(`https://masai-api-mocker.herokuapp.com/auth/register` ,cred);
        dispatch({ type : REGISTER_SUCCESS , payload : response.data});
        return response.data;
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE , payload: error.message})
    }
}

export let getLogin = (Credential) => async(dispatch) => {
    dispatch({ type : LOGIN_LOADING});
    try {
        let response = await axios.post(`https://masai-api-mocker.herokuapp.com/auth/login` , Credential);
        dispatch({ type : REGISTER_SUCCESS , payload: response.data});
        return response.data;
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE , payload : error.message});
    }
}


import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_LOADING, REGISTER_SUCCESS } from "./authActionType";

let token = localStorage.getItem("token");
const initialState = {
    isLoading : false,
    isError : false,
    isAuth : !!token,
    token : token,
    message : ""
}

export const authReducer = (state=initialState , {type , payload}) => {
    switch(type){
        case REGISTER_LOADING: {
          return {
           ...state,
           isLoading: true,
           isError : false,
          }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading : false,
                isError : false,
                message : "Registration success"
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                isLoading : false,
                isError : true,
                message : "Something went wrong"
            }
        }
        case LOGIN_LOADING: {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case LOGIN_SUCCESS:{
             localStorage.setItem("token" , payload)
            return {
                ...state,
                isLoding: false,
                isError : false,
                isAuth: true,
                token : payload,
                message : "Login successful"
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isError : true,
                isLoading : false,
                message : payload
            }
        }
        default: return state
    }
}
import { getPetFailure, getPetLoading, getPetSuccess, petFailure, petLoading, petSuccess } from "./petActionTypes"

const initState = {
    isError : false,
    isLoading : false,
    pet : []
}

export const petReducer = (state=initState , {type , payload}) => {
    switch(type){
        case petLoading: {
            return {
                ...state,
                isLoading : true,
                isError : false,
            }
        }
        case petSuccess: {
            return{
                ...state,
                isLoading: false,
                isError: false,
                pet : [...state.pet , payload]
            }
        }
        case petFailure: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case getPetLoading : {
            return {
                ...state,
                ieLoading : true,
                isError : false
            }
        }
        case getPetSuccess : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                pets : [...state.pet , payload]
            }
        }
        case getPetFailure : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        default : return state
    }
}
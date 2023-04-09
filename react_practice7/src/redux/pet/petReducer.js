import { deletePetFailure, deletePetLoading, deletePetSuccess, editPetFailure, editPetLoading, editPetSuccess, getPetFailure, getPetLoading, getPetSuccess, petFailure, petLoading, petSuccess } from "./petActionTypes"

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
                pet : payload
            }
        }
        case getPetFailure : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case deletePetLoading : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case deletePetSuccess : {
            let newPet = state.pet.filter((el) => el.id !== payload)
            return {
                ...state,
                isError : false,
                isLoading : false,
                pet : newPet
                 }
        }
        case deletePetFailure : {
            return {
                ...state,
                isError : true,
                isLoading : false
            }
        }
        case editPetLoading : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case editPetSuccess : {
            let editPet = state.pet.map((el) => el.id === payload.id? payload.data : el )
            return {
               ...state,
               pet : editPet,
               isLoading : false,
               isError : false
            }
        }
        case editPetFailure : {
            return {
                ...state,
                isError : true,
                isLoading: false
            }
        }
        default : return state
    }
}
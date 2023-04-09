import axios from "axios";
import { deletePetFailure, deletePetLoading, deletePetSuccess, editPetFailure, editPetLoading, editPetSuccess, getPetFailure, getPetLoading, getPetSuccess, petFailure, petLoading, petSuccess } from "./petActionTypes";

export const addPets = ({payload , toaster}) => async(dispatch) => {
    dispatch({ type:petLoading });
    try {
        let response = await axios.post(`https://json-server-dep.onrender.com/dogs`, payload);
        if(response){
            dispatch({ type: petSuccess , payload:response.data})
            console.log(response.data)
            toaster.successToast();
            return response.data;
        }
    } catch (error) {
           dispatch({ type: petFailure , payloada: error});
           console.log(error.message);
           toaster.failToast()
    }
}

export const getPets = () => async(dispatch) => {
    dispatch({ type: getPetLoading });
    try {
        let response = await axios.get(`https://json-server-dep.onrender.com/dogs`);
        if(response){
            dispatch({ type : getPetSuccess , payload : response.data});
            console.log(response.data)
            return response.data
        }
    } catch (error) {
        dispatch({ type: getPetFailure , payload : error});
        console.log(error.message)
    }
}

export const deleteDog = (id) => async(dispatch) => {
    dispatch( {type: deletePetLoading});
    try {
        let response = await axios.delete(`https://json-server-dep.onrender.com/dogs/${id}`)
        if(response){
        dispatch({ type: deletePetSuccess , payload : id});
        console.log(response.data);
        
        }
    } catch (error) {
        dispatch({ type:deletePetFailure , payload : error});
        console.log(error.message);
    }
}

export const editDog = (id,age) => async(dispatch) => {
    dispatch({ type: editPetLoading});
    try {
        let response = await axios.patch(`https://json-server-dep.onrender.com/dogs/${id}`,{age:age});
        if(response){
            dispatch({ type: editPetSuccess , payload : {id , response}});
            console.log(response.data);
        }
    } catch (error) {
        dispatch({ type: editPetFailure , payload : error});
        console.log(error.message)
    }
}
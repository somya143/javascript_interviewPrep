import axios from "axios";
import { getPetFailure, getPetLoading, getPetSuccess, petFailure, petLoading, petSuccess } from "./petActionTypes";

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

export const getPets = (payload) => async(dispatch) => {
    dispatch({ type: getPetLoading });
    try {
        let response = await axios.get(`https://json-server-dep.onrender.com/dogs` , payload);
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
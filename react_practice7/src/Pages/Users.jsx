import React, {useState,useEffect} from 'react';
import { Box,Input,Button,useToast} from "@chakra-ui/react";
import { useDispatch , useSelector } from "react-redux";
import { addPets } from '../redux/pet/petAction';

const initState = {
    name: "",
    age: "",
    gender: "",
    place: "",
}
const Users = () => {
    const [pet , setPet] = useState(initState);
    const {pets , isError , isLoading} = useSelector((store) => store.pet);
    const dispatch = useDispatch();
    const toast = useToast();

    const successToast = () =>
    toast({
      title: "Registration Successful",
      description: "You've Registered your Dog successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  const failToast = () =>
    toast({
      title: "Registration Failed",
      description: "Something went wrong",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  const toaster = { successToast, failToast };

    const handleChange = (e) => {
    const  {name,value} = e.target;
    if(e.target.name === "age"){
        setPet({...pet , 
            [name] : Number(value)
            })
    }else{
        setPet({...pet , 
            [name] : value
            })
    }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPets({payload:pet, toaster}))
    }

    if(isLoading){
        return <h1>...Loading</h1>
    }else if(isError){
        return <h1>...Error</h1>
    }else

  return (
    <>
    <Box w="60%"  margin="auto" mt={15}>

        <form action="" onSubmit={handleSubmit}>
        <Input my={3} type='text' placeholder='Name of Breed...' name='name' value={pet.name} onChange={handleChange} />
        <Input my={3} type='tel' placeholder='Age of Pet...' name='age' value={pet.age} onChange={handleChange} />
        <Input my={3} type='text' placeholder='Gender...' name='gender' value={pet.gender} onChange={handleChange} />
        <Input my={3} type='text' placeholder='Place...' name='place' value={pet.place} onChange={handleChange} />
        <Button colorScheme='teal' variant={'ghost'} w="100%" type='submit'>Submit</Button>
        </form>
    </Box>
    </>
  )
}

export default Users
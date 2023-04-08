import React, {useEffect, useState} from "react";
import { useSelector , useDispatch } from "react-redux"
import { getLogin } from "../redux/auth/authAction";
import { Input,Box,Button,useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function Login(){
    const {isError , isLoading , isAuth} = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const [login , setLogin] = useState({email:"" , password:""});
    const toast = useToast();
    const navigate = useNavigate();

    

    const handleChange = (e) => {
        const {value , name} = e.target;
        setLogin({...login,
        [name] : value
        })
    }

    const successToast = () => {
        toast({
            title: 'Account created.',
            description: "You have loggedin successfully",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }
    const failToast = () => {
        toast({
            title: 'Login failed.',
            description: "Something went wrong",
            status: 'fail',
            duration: 3000,
            isClosable: true,
          })
    }
    const toaster = {successToast , failToast}
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getLogin({payload: login , toaster}));

        setTimeout(() => {
            if(isAuth){
                navigate("/data" , {replace: true})
            }
        },4000)
        
    }

    
    
    
    if(isLoading){
       return <h1>...Loading</h1>
    }else if(isError){
        return <h1>Something Went Wrong</h1>
    }else

return(
    <Box padding="15" width="60%" border="1px solid" borderRadius="20px" margin="auto" mt={15}>
        <h1>Login Here</h1>
        <form action="" onSubmit={handleSubmit}>
          
          <Input
          my={3}
        value={login.email}
        name="email"
        onChange={handleChange}
        placeholder='Enter Your Mail'
        size='sm'
      />
      <Input
      my={3}
        value={login.password}
        name="password"
        onChange={handleChange}
        placeholder='Enter Your Password'
        size='sm'
      />
         <Button  type="submit" isLoading={isLoading} loadingText="Logging in" w="100%">Login</Button>
          
        </form>
    </Box>
)

}



export default Login;

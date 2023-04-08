import React,{useState , useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { getRegister } from "../redux/auth/authAction";
import { useNavigate } from "react-router-dom";

function Register(){
const {auth , isError , isLoading} = useSelector((store) => store.auth)
const dispatch = useDispatch();
const [register , setRegister] = useState({});
const navigate = useNavigate();

const handleChange = (e) => {
    const {value , name} = e.target;
    setRegister({...register ,
     [name] : value
})
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRegister(register));
}
const handleClick = () => {
  navigate("/login")
}

if(isLoading){
    return <h1>...Loading</h1>
}
 if(isError){
    return <h1>Something went wrong</h1>
}
    return(
        <div>
            <h1>Register Yourself</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email"  name="email" onChange={handleChange} />
                <input type="text" placeholder="Enter Password"  name="password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>

            <div>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Register;
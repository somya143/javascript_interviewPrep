import { Route , Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import Admin from "../Pages/Admin";
import Data from "../Pages/Data";
import Report from "../Pages/Report";
import PrivateRoute from "../HOC/PrivateRoute";

function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
             <Route path="/users" element={<Users />}></Route>
             <Route path="/admin" element={<Admin />}></Route>
             <Route path="/data" element={<PrivateRoute><Data /></PrivateRoute>}></Route>
             <Route path="/report" element={<PrivateRoute><Report /></PrivateRoute>}></Route>
        </Routes>
        </>
    )
}

export default AllRoutes
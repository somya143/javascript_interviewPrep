import React from 'react';
import { Box,Button,Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";


const Admin = () => {
  return (
   <Box display="flex" justifyContent="space-around">
    <Button>
        <Link as={ReachLink} to="/login">Login</Link>
    </Button>

    <Button>
        <Link as={ReachLink} to="/data">Data</Link>
    </Button>

    <Button>
        <Link as={ReachLink} to="/report">Report</Link>
    </Button>
   </Box>
  )
}

export default Admin
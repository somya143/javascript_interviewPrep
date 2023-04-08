import React from 'react';
import { Link as ReachLink } from "react-router-dom";
import { Link,Button,Box,Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
  <Heading>This is Home page</Heading>
    <Box padding={10} display="flex" justifyContent="space-around">
        <Button>
            <Link as={ReachLink} to="/users">Users</Link>
        </Button>

        <Button>
            <Link as={ReachLink} to="/admin">Admin</Link>
        </Button>
    </Box>
    </>
  )
}

export default Home
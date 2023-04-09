import React, { useEffect, useState } from 'react';
import DogCard from '../Components/DogCard';
import { Box, SimpleGrid} from "@chakra-ui/react";
import { useSelector , useDispatch } from "react-redux";
import { getPets } from '../redux/pet/petAction';

const Data = () => {
  const {isLoading , isError , pet} = useSelector((store) => store.pet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [])

  if(isLoading){
    return <h1>...Loading</h1>
  }else if(isError){
    return <h1>Something Went wrong</h1>
  }else

  return (
    <Box>
     <SimpleGrid
        width="85%"
        margin="auto"
        padding="10px"
        columns={[1, 2, 3, 4]}
        gap="10px"
      >
        {pet?.map((p) => (
          <DogCard  dog={p} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Data
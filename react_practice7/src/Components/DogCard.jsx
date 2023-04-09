import React from 'react'
import { Box,Button,Image,Heading,Text,VStack,Flex,Icon,Spacer } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai"
import { useDispatch} from "react-redux";
import { deleteDog } from '../redux/pet/petAction';
import EditDogAge from './EditDogAge';

const DogCard = ({dog}) => {
    const dispatch = useDispatch();
  return (
    <Box w="100%">
        <VStack>
        <Image src="https://tse2.mm.bing.net/th?id=OIP.RZit-f8kmjDv27MWUOguJwHaEo&pid=Api&P=0" alt="Dog" />
        <Text>Name:{dog.name}</Text>  
        <Text>Age:{dog.age}</Text>
        <Text>Place:{dog.place}</Text>
        <Text>Gender:{dog.gender}</Text>
        <Flex>
            <EditDogAge id={dog.id} />
         <Spacer />
         <Icon
         as={AiFillDelete}
         cursor="pointer"
         onClick={() => dispatch(deleteDog(dog.id))}
         />
        </Flex>
        </VStack>
    </Box>
  )
}

export default DogCard
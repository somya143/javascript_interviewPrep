import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Icon,
  } from "@chakra-ui/react";
  import React from "react";
  import { AiFillEdit } from "react-icons/ai";
  import { useDispatch } from "react-redux";
  import { editDog } from "../redux/pet/petAction";
  import { useState } from "react";
  
  const DogEdit = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [age, setAge] = useState();
    const dispatch = useDispatch();
    const handleClick = () => {
      let newAge = Number(age);
      dispatch(editDog(id, newAge));
      onClose();
    };
    return (
      <>
        <Icon as={AiFillEdit} cursor="pointer" onClick={onOpen} ></Icon>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Entry</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Enter New Age"
                type="number"
                onChange={(e) => setAge(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClick}>
                Update
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default DogEdit;
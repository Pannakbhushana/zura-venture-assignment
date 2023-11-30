import React, { useState } from "react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import { Input,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter ,
    Text
   } from '@chakra-ui/react';


function CreateProjectModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [val, setVal]=useState("");
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange=(e)=>{
        setVal(e.target.value)
    }
  
    return (
      <>
        
        <Button 
            background="black" 
            color="#fff" 
            colorScheme='messenger'
            onClick={onOpen}
            >
            <PlusSquareIcon/><div style={{width:"10px"}}></div>Create a New Project</Button>
     
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Text as="b" >Create Project</Text></ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter Project Name</FormLabel>
                <Input ref={initialRef} placeholder='Type here' onChange={handleChange} />
                <br />
                {val=="" ? <Text color="#C62828" fontSize="12px" >Project name can't be empty</Text>: <Text ></Text>}
              </FormControl>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={()=>{
                setVal("")
                onClose()
              }}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateProjectModal
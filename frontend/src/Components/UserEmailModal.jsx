import React, { useEffect, useState } from "react";
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


  function UserEmailModal() {
    const [val, setVal]=useState("");

    useEffect(()=>{
        onOpen()
    },[])

    const handleChange=(e)=>{
        setVal(e.target.value)
    }

    const handleSave=()=>{
        onClose()
    }
    
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
 
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Enter your email</ModalHeader>
            <ModalCloseButton />
            
            <ModalBody>
                <FormControl>
                 
                    <Input  placeholder='Type here' onChange={handleChange} />
                    <br />
                    {val=="" ? <Text color="#C62828" fontSize="12px" >Email name can't be empty</Text>: <Text ></Text>}
                </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSave} >Save</Button>
              <div style={{width:"20px"}}></div>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    )
  }


  export default UserEmailModal
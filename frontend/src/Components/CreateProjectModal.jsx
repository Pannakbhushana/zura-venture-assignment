import React, { useState } from "react";
import { PlusSquareIcon } from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom";

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
    const navigate=useNavigate()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange=(e)=>{
        setVal(e.target.value)
    }

    const handleSave=()=>{
      let data={
        title:val,
        file:[],
        status:"false",
        date:Date()
      }
      
        let listData=JSON.parse(localStorage.getItem("listData"))||[];
        listData.push(data);
        localStorage.setItem("listData",JSON.stringify(listData))
        console.log(listData)
        navigate("/listing")
        
    }

    const postListingData=(data)=>{
        fetch("http://localhost:8080/project/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            alert("project add successfully !")
            navigate("/listing")
        })
        .catch(err=>{
            // alert("Not abe to add project !")
            console.log(err.message)
        })
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
                <Input  placeholder='Type here' onChange={handleChange} value={val} />
                <br />
                {val=="" ? <Text color="#C62828" fontSize="12px" >Project name can't be empty</Text>: <Text ></Text>}
              </FormControl>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSave}>
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
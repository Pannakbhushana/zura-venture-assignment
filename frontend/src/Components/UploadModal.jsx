import React, { useEffect, useState } from "react";
import styles from "../Style/SingleProjectPage.module.css";
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
   const data=[
    {title:"Upload Youtube Video",link:"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-play-button-logo-icon-14.png"},
    {title:"Upload Spotify Podcast",link:"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"},
    {title:"Upload From RSS Feed",link:"https://cdn2.iconfinder.com/data/icons/ui-7-1/502/rss-512.png"},
    {title:"Upload Youtube Video",link:"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-play-button-logo-icon-14.png"},
    {title:"Upload Spotify Podcast",link:"https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"},
    {title:"Upload From RSS Feed",link:"https://cdn2.iconfinder.com/data/icons/ui-7-1/502/rss-512.png"}
]


function UploadModal({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formState, setFormState]=useState({name:"",description:""});
   
    
   
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleChange=(e)=>{
        setFormState({...formState, [e.target.name]:e.target.value})
    }

    const handleSave=()=>{
       let userId=(id)
      
       let data=JSON.parse(localStorage.getItem("listData"));
          for(let i=0; i<data.length; i++){
            if(`${i}}`===id){
                data[i].file.push(formState);
                break;
            }
                   }
               localStorage.setItem("listData",JSON.stringify(data));
               
    
        setFormState({name:"",description:""});
        onClose()
    }

    const handleModalOpen=()=>{
        onOpen()
    }

    const getData=()=>{
        fetch(`http://localhost:8080/project/${id}`)
        .then(res=>res.json())
        .then((res)=>{
            // console.log(res)
         const newData=[...res.file,formState]
         postListingData(newData)
        })
        .catch(err=>{
            alert("Not abe to add project !")
            console.log(err.message)
        }) 
    }

    const postListingData=(data)=>{
        fetch(`http://localhost:8080/project/add/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({file:data,status:true,date:Date()}),
        })
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            alert("project add successfully !")
            // navigate("/listing")
        })
        .catch(err=>{
            alert("Not abe to add project !")
            console.log(err.message)
        })
    }
    
    return (
      <>
            {data.map((el,i)=>{
                return <div className={styles.parent} key={i} onClick={()=>{
                    
                    
                    handleModalOpen()
                }} >
                <div className={styles.subchildOne}  ><img src={el.link} alt="" style={{width:"100%",height:"100%"}} /></div>
                <div className={styles.subchildTwo} ><Text as="b" fontSize="20px"  >{el.title}</Text></div>
            </div>
               })}

            <div onClick={onOpen}></div>
     
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Text as="b" >Upload File</Text></ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> Name</FormLabel>
                <Input  placeholder='Type here' onChange={handleChange} value={formState.name} name="name" />
              </FormControl>

              <FormControl>
                <FormLabel> Description</FormLabel>
                <Input  placeholder='Type here' onChange={handleChange} value={formState.description} name="description" />
              </FormControl>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSave}>
                Save
              </Button>
              <Button onClick={()=>{
                setFormState("")
                onClose()
              }}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default UploadModal
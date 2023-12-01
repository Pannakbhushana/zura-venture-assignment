import React, { useEffect, useState } from 'react';
import styles from "../Style/EditPage.module.css";
import { Text,Button,Textarea } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";





function EditPage() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [data, setData]=useState("");


 
let dummy=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. t is a long established fact 
that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
years, sometimes by accident, sometimes on purpose (injected humour and the like)
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. t is a long established fact 
that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is 
that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like 
readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
years, sometimes by accident, sometimes on purpose (injected humour and the like)
`


    
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sideBar}>
            <br />
            <div  onClick={()=>{navigate("/")}} style={{cursor:"pointer",display:"flex"}}>
                <img src="/lamaLogo.png" alt="" style={{cursor:"pointer",width:"20%",height:"40px"}}  />
                <div style={{width:"10px"}}></div>
                <Text as="b" fontSize="25px" color="#7229af">LAMA.</Text>
            </div>
            <br />
            <br />
            <p>Podcast Upload Flow</p>

            <br />
            <Button 
                     _hover={{ bg: "#7229af",color:"#fff" }} 
                     variant='ghost'
                     isFullWidth textAlign="left"
                     borderRadius="20px"
                     onClick={()=>{navigate("/listing")}}
                     >1 Projects </Button>

                     <br />

                     <Button 
                     _hover={{ bg: "#7229af",color:"#fff" }} 
                     variant='ghost'
                     isFullWidth textAlign="left"
                     borderRadius="20px"
                     onClick={()=>{navigate("/widget")}}
                     > 2 Widget Configuration</Button>

                     <br />

                     <Button 
                    _hover={{ bg: "#7229af",color:"#fff" }} 
                     variant='ghost'
                     isFullWidth textAlign="left"
                     borderRadius="20px"
                     > 3 Depeloyment</Button>

                     <br />
                     <Button 
                     _hover={{ bg: "#7229af",color:"#fff" }} 
                     variant='ghost'
                     isFullWidth textAlign="left"
                     borderRadius="20px"
                     > 4 Pricing</Button>

                    <br />
                     <Button 
                     onClick={()=>navigate("/account")}
                     marginTop="130%"
                     _hover={{ bg: "#7229af",color:"#fff" }} 
                     variant='ghost'
                     isFullWidth textAlign="left"
                     borderRadius="20px"
                     > <Text as="b" fontSize="18px" style={{cursor:"pointer"}} ><SettingsIcon/></Text> <div style={{width:"10px"}}></div> Settings</Button>
                    
        </div>


        

        <div className={styles.box} >
            <div className={styles.textBox}>
                <div> <Text as="b" fontSize="30px" color="#7229af">Edit Transcript</Text></div>
                <div style={{display:"flex"}}>
                    <Button colorScheme='red' variant='outline'>Discard</Button>
                    <div style={{width:"15px"}}></div>
                    <Button backgroundColor="black" color="#fff" variant='outline'>Save & Exit</Button>
                </div>
            </div>

          <div className={styles.boxContainer}>
            <Textarea placeholder='Type Here' height="100%" value={dummy} />
          </div>

        </div>
      </div>
    </>
  )
}

export default EditPage

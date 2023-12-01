import React, { useEffect, useState } from 'react';
import styles from "../Style/SingleProjectPage.module.css";
import { Text,Button } from '@chakra-ui/react';
import { IoIosCloudOutline } from 'react-icons/io';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import UploadModal from '../Components/UploadModal';




function SingleProjectPage() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [data, setData]=useState([]);


    useEffect(()=>{
        getData()
    },[])


    const getData=()=>{
        fetch(`http://localhost:3000/listing/${id}`)
        .then(res=>res.json())
        .then((res)=>{
          setData(res.file);
          
          console.log(res.file)
        })
        .catch(err=>{
            alert("Not abe to add project !")
            console.log(err.message)
        }) 
    }




    
    
    
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
                    
        </div>


        

        <div className={styles.box}>
                <br />
                <br />
            <div className={styles.childOne}><Text as="b" fontSize="30px" color="#7229af">Upload</Text></div>

            <div className={styles.childTwo}>
               <UploadModal id={id}/>
            </div>

            <Text fontSize="20px" color="gray"> or</Text>
            <br />

            <div className={styles.childThree}>
{/*                
                {!status && <div className={styles.dragAndDrop} >
                    <Text fontSize="60px" color="#7229af" style={{marginLeft:"47%"}}> <IoIosCloudOutline/></Text>
                    <br />
                    <Text fontSize="20px" color="black"> Select a file or drag and drop here (Podcast media or Transscription Text)</Text>
                    <br />
                    <Text fontSize="10px" color="gray"> MP4, MOV,MP3,WAV,PDFDOCX or TXT file</Text>
                    <br />
                    <Button colorScheme='teal' variant='outline' borderRadius="20px">Select File</Button>
                </div>} */}

                 <div className={styles.allFile}>
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Update Date & Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                                {data.map((el,i)=>{
                                    
                                    return <tr key={i}>
                                    <td>{el.name}</td>
                                    <td>{Date()}</td>
                                    <td>{el.status ? "Done":"Not Done"}</td>
                                    <td><button>Edit</button> <button>Delete</button></td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProjectPage

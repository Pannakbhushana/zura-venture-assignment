import React, { useEffect, useState } from 'react';
import styles from "../Style/AccountPage.module.css";
import { Text,Button,Input } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";





function AccountPage() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [data, setData]=useState("");

useEffect(()=>{
    fetchEmail()
},[])
 
const fetchEmail=()=>{
    const userEmail=JSON.parse(localStorage.getItem("zuraEmail"));
    if(userEmail){
        setData(userEmail)
    }
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


        

        <div className={styles.box}>
            <div className={styles.parent}>
                <div className={styles.boxChildOne}>
                    <div style={{textAlign:"start"}}><Text as="b" fontSize="40px" color="#7229af" textAlign="start">Account Setting</Text></div>
                </div>

                <div className={styles.boxChildTwo}>
                    <div className={styles.boxSubChildOne}>
                        <div style={{border:"1px solid black",width:"60%",height:"60%",borderRadius:"50%"}}>
                            <img style={{width:"100%",height:"100%", borderRadius:"50%"}}
                            src="https://th.bing.com/th/id/R.3ebd638fa8ef939434a52ecd4d0638c0?rik=ZmRIwBJIotD9lQ&riu=http%3a%2f%2fstlouiskitchendesign.xyz%2fwp-content%2fuploads%2f2017%2f12%2fweather-stripping-remodeling-home-st-louis-300x300.jpg&ehk=IW6d52l%2b9wyLaw8ebiTEat3DHTgbpHn3QxkSwo1wJPY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                    </div>
                    <div className={styles.boxSubChildTwo}>

                        <div style={{textAlign:"start"}}>
                        <Text as="b" fontSize="20px" color="#7229af" >User name</Text>
                            <Input placeholder='username' size='md' borderColor="black"  />
                        </div>

                    </div>

                    <div className={styles.boxSubChildThree}>
                        <div style={{textAlign:"start"}}>
                            <Text as="b" fontSize="20px" color="#7229af" >Email</Text>
                                <Input placeholder='email' size='md' borderColor="black" value={data} disabled />
                        </div>
                    </div>
                </div>

                <div className={styles.boxChildThree}>
                    <div style={{textAlign:"start"}}><Text as="b" fontSize="35px" color="#7229af" textAlign="start">Subscriptions</Text></div>
                    <br />
                    <div style={{
                        width:"90%",
                        height:"50px",
                        backgroundColor:"#7229af",
                        color:"#fff",
                        borderRadius:"10px",
                        display:"flex",
                        alignContent:"center",
                        justifyContent:"space-around",
                        alignItems:"center"
                    }}>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <Text  fontSize="18px" color="#fff" >
                                You are currently on the <span style={{textDecorationLine:"underline", fontWeight:"bold"}}>Ques AI Basic Plan!</span></Text>
                        </div>

                        <Button color='#7229af' backgroundColor="#fff" size='sm'>Upgrade </Button>
                    </div>
                        <div style={{textAlign:"start"}}><Text as="b" textDecorationLine="underline"  fontSize="12px" color="#C62828" >Cencel Subscription</Text></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AccountPage

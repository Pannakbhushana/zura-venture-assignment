import React, { useEffect, useState } from 'react';
import styles from "../Style/WidgetConfirigation.module.css";
import { Text,Button,Input } from '@chakra-ui/react';
import { SettingsIcon,DownloadIcon } from '@chakra-ui/icons';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { Switch } from '@chakra-ui/react'

function WidgetConfirigation() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [data, setData]=useState("");
    const [state, setState]=useState(true);
    
    const handleGeneral=()=>{
        setState(true)
        document.getElementById("displayToggle").style.textDecoration="none";
        document.getElementById("generalToggle").style.textDecoration="underline";
        
    }

    const handleDisplay=()=>{
        setState(false)
        document.getElementById("generalToggle").style.textDecoration="none";
        document.getElementById("displayToggle").style.textDecoration="underline";
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


        

        <div className={styles.box}>
            <div>
                <div className={styles.upper} >
                    <Text as="b" fontSize="30px" color="#7229af">Configuration</Text>
                </div>

                <div className={styles.midium} >
                    <div onClick={handleGeneral} id='generalToggle' style={{textDecoration:"underline"}}><Text as="b" fontSize="16px" color="#7229af">General</Text></div>
                    <div onClick={handleDisplay} id='displayToggle'><Text as="b" fontSize="16px" color="#7229af">Display</Text></div>
                    <div><Text as="b" fontSize="16px" color="#7229af">Advanced</Text></div>
                    <br />
                </div>
                   <div style={{width:"100%",border:"1px solid #CFD8DC",height:"0px"}}></div>

                <div className={styles.bottom} >
                 <div className={styles.generalParentContainer} style={{display:state ? "block":"none"}} >
                    <div className={styles.general}>
                        <div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Chatbot Name</Text></div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='md'  /></div>
                            <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                        </div>

                        <div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Welcome Message</Text></div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='md'  /></div>
                            <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                        </div>

                        <div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Input Placeholder</Text></div>
                            <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='md'  /></div>
                            <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                        </div>
                    </div>
                </div>



        <div className={styles.displayParentContainer} style={{display:state ? "none":"block"}} >
   
                    <div className={styles.display}>
                        <div className={styles.displayLeft}>
                            <div style={{marginTop:"5%"}}>
                                <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Primary Color</Text></div>
                                <div style={{textAlign:"start",width:"80%",padding:"1%",display:"flex"}}><Input placeholder='Type here' size='md' value="#7BD568"  /><div style={{width:"20px"}}></div><div style={{width:"40px",height:"35px", backgroundColor:"#7BD568",borderRadius:"5px"}}></div></div>
                                <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                            </div>

                            <div style={{marginTop:"5%"}}>
                                <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Font Size(In Px)</Text></div>
                                <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='md' value="25"  /></div>
                                <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                            </div>
                            
                            <br />
                            <div style={{textAlign:"start"}}><Text as="b" fontSize="20px" >Show Sources</Text><br />
                            <Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text>
                            </div>
                            <br />
                           
                            <hr />
                        </div>

                        <div className={styles.displayRight}>
                            <div style={{marginTop:"5%"}}>
                                    <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Font Color</Text></div>
                                    <div style={{textAlign:"start",width:"80%",padding:"1%",display:"flex"}}><Input placeholder='Type here' size='md' value="#3c3c3c"  /><div style={{width:"20px"}}></div><div style={{width:"40px",height:"35px", backgroundColor:"#3c3c3c",borderRadius:"5px"}}></div></div>
                                    <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                </div>

                                <div style={{marginTop:"5%"}}>
                                    <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Chat Height(In % of total screen)</Text></div>
                                    <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='md' value="Lorem Ipsum"  /></div>
                                    <div style={{textAlign:"start"}}><Text  fontSize="12px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                </div>
                                    <br />
                                <div style={{textAlign:"end"}}><Text as="b" fontSize="20px" ><Switch size='lg' isChecked  /></Text></div>
                            <br />
                          
                            <hr />
                        </div>
                    </div>
                    <div style={{width:"100%",border:"1px solid #CFD8DC",height:"0px"}}></div>






                    <div className={styles.advanced}>
                            <div className={styles.display}>
                                <div className={styles.displayLeft}>
                                    <div style={{marginTop:"5%"}}>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Chat Icon Size</Text></div>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%",display:"flex"}}><Input placeholder='Type here' size='sm' value="small(48x48px)"  /></div>
                                        <div style={{textAlign:"start"}}><Text  fontSize="8px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                    </div>

                                    <div style={{marginTop:"5%"}}>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Distance from bottom(In px)</Text></div>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='sm' value="20"  /></div>
                                        <div style={{textAlign:"start"}}><Text  fontSize="8px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                    </div>
                                </div>

                                <div className={styles.displayRight}>
                                <div style={{marginTop:"5%"}}>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Position on screen</Text></div>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%",display:"flex"}}><Input placeholder='Type here' size='sm' value="Bottom Right"  /></div>
                                        <div style={{textAlign:"start"}}><Text  fontSize="8px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                    </div>

                                    <div style={{marginTop:"5%"}}>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Horizontal Distance(In px)</Text></div>
                                        <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Input placeholder='Type here' size='sm' value="20"  /></div>
                                        <div style={{textAlign:"start"}}><Text  fontSize="8px" color="gray">Lorem Ipsum is simply dummy text</Text></div>
                                    </div>
                                        
                                </div>
                                
                    </div>
                  
                    <div style={{textAlign:"start",width:"80%",padding:"1%"}}><Text as="b" fontSize="16px" color="#7229af">Bot Icon</Text></div>
                    <div style={{display:"flex"}}>
                        <div style={{width:"40px",height:"40px",backgroundColor:"gray",borderRadius:"50%"}}></div>
                        <div style={{width:"20px"}}></div>
                        <div>
                            <div style={{width:"130px",height:"40px",backgroundColor:"#7229af",color:"#fff",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Text as="b"  fontSize="12px" >Upload Image <DownloadIcon/></Text>
                            </div>
                        </div>
                    </div>

                    </div>

        </div>




                </div>
            </div>
        </div>
      </div>
    
    </>
  )
}

export default WidgetConfirigation



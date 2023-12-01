import React from 'react';
import styles from "../Style/Navbar.module.css";
import { Text } from '@chakra-ui/react';
import { SettingsIcon, BellIcon } from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();

  return (
    <div className={styles.navbar} >
      <div className={styles.navFirstChild} onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}>
        <img src="/lamaLogo.png" alt="" className={styles.logoImage}  />
        <div style={{width:"10px"}}></div>
        <Text as="b" fontSize="25px" color="#7229af">LAMA.</Text>
      </div>

      <div className={styles.navSecondChild}>
            <Text as="b" fontSize="25px" style={{cursor:"pointer"}} ><SettingsIcon/></Text>
            <div style={{width:"15px"}}></div>
            <Text as="b" fontSize="25px" style={{cursor:"pointer"}} ><BellIcon/></Text>
      </div>
    </div>
  )
}

export default Navbar

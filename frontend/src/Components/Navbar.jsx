import React from 'react';
import styles from "../Style/Navbar.module.css";
import { Text } from '@chakra-ui/react';
import { SettingsIcon, BellIcon } from '@chakra-ui/icons'
function Navbar() {
  return (
    <div className={styles.navbar} >
      <div className={styles.navFirstChild}>
        <img src="lamaLogo.png" alt="" className={styles.logoImage}  />
        <div style={{width:"10px"}}></div>
        <Text as="b" fontSize="25px" color="#00b0f2">LAMA.</Text>
      </div>

      <div className={styles.navSecondChild}>
            <Text as="b" fontSize="25px" ><SettingsIcon/></Text>
            <div style={{width:"15px"}}></div>
            <Text as="b" fontSize="25px" ><BellIcon/></Text>
      </div>
    </div>
  )
}

export default Navbar

import React, { useEffect, useState } from 'react';
import styles from "../Style/ListingProject.module.css";
import { Text,Button } from '@chakra-ui/react';
import {useNavigate,Link, useParams} from "react-router-dom";
import { PlusSquareIcon } from '@chakra-ui/icons';
import Navbar from '../Components/Navbar';


function ListingProject() {
    const navigate=useNavigate()
    const [data, setData]=useState([]);

    useEffect(()=>{
        let Data=JSON.parse(localStorage.getItem("listData"));
        setData(Data)
    },[])

    const getListingData=()=>{
        fetch("http://localhost:8080/project")
        .then(res=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res);
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

   
      
      const generateRandomColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        return randomColor;
      }
     
     


  return (
    <div>
      <Navbar/>
      <div className={styles.box}>
        <div><Text as="b" fontSize="40px" color="#7229af">Projects</Text></div>
        
        <div>
            <Button 
                background="black" 
                color="#fff" 
                colorScheme='messenger'
                onClick={()=>{navigate("/")}}
                >
                <PlusSquareIcon/><div style={{width:"10px"}}></div>Create a New Project</Button>
        </div>
      </div>

      <div className={styles.container}>
        {data.length && data.map((el,i)=>{
         console.log(el)
          return <Link key={i} to={`/listing/${i}`}>
            <div className={styles.parent} >

              <div className={styles.childOne} style={{backgroundColor: generateRandomColor()}} >
                  <Text  as="b" fontSize="40px">{el.title[0].toUpperCase()}</Text>
              </div>

              <div className={styles.childTwo} ><Text fontSize="20px" style={{color: generateRandomColor()}} >{el.title}</Text></div>
            </div>
          </Link>
        })}
      </div>
    </div>
  )
}

export default ListingProject

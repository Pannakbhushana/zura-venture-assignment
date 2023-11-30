import React from 'react';
import { Text,Button } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons'

function Home() {
  return (
    <div style={{marginTop:"5%"}}>

       <Text as="b" fontSize="50px" color="#7229af">Create a New Project</Text>

       <br />

            <img style={{
                width:"30%",
                height:"300px",
                marginLeft:"35%"
            }} 
            src="https://thumbs.dreamstime.com/z/freelancers-man-woman-working-together-home-couple-office-isolated-cartoon-workers-vector-people-laptop-213332882.jpg?w=992" 
            alt="" />
       

       <div style={{width:"80%",marginLeft:"10%"}}>

            <Text color="gray"  >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently
            </Text>

            <br />

            <Button background="black" color="#fff" colorScheme='messenger'><PlusSquareIcon/><div style={{width:"10px"}}></div>Create a New Project</Button>

       </div>

    </div>
  )
}

export default Home

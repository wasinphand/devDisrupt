import Webcam from "react-webcam";
import React from  'react';
import {Button,Box} from "@chakra-ui/core";
import {useState} from 'react';
import Link from 'next/link'
import { Icon } from "@chakra-ui/core";


export default function Luck(){
    const [isGood,setIsGood] = useState(null);
    const [a,setA] = useState(0);
  
    function capture(){
        //setIsGood(Math.round(Math.random())===1)
        setIsGood(false);
        setA(a+1)
    }
        
    

    return (
        <div>
            <Link href="/" >
                <Icon  name="arrow-back" size="50px" /> 
                
            </Link>
       
            <div style={{marginLeft:"35%"}}>
                <Webcam/> 
             <Button variantColor="green" style={{marginLeft:"22%",marginTop:"2%"}} onClick={capture}>ลองกดเพื่อดูดวงเลย !!</Button>
             
            </div>
            {a!==0 && <Box style={{marginLeft:"42%",marginTop:"3%",fontSize:"30px",display:"inline-block"}} bg="Yellow">
                { isGood  ? <div>ดวงดีแล้ววว</div> : <div >ดวงไม่ดีเลยนะ ต้องทำบุญหน่อยแล้ว !!</div>}
            </Box> }
            <div style={{fontSize:"45px",marginTop:"3%",textAlign:"center",color:"red"}}>การดูดวงเป็นความเชื่อส่วนบุคคล กรุณาใช้วิจารณญาณในการรับชม</div>
           
            
        </div>
    )
}
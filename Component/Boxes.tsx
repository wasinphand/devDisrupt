import { Box,Image } from "@chakra-ui/core";
import {datas} from '../hookApi/mockData';
import Link from 'next/link'


export default function Boxes(){
    return (
        <div style={{paddingLeft:"9.75%"}}>
                {datas.map((data,index)=>
                <Link href= {`projectdetail?id=${data.id - 1}`}>
                <div style={{display:'inline-block',justifyContent:"space-between",marginRight:"20px",paddingTop:"30px"}}>
                <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        
                     <Image size="500px" src={data.picture} />
                     <Box style={{fontWeight:"bold",fontSize:"20px"}}>
                     {data.title}   
                     </Box>
                     <Box style={{fontSize:"12px"}}>
                        {data.shortDesc}
                    </Box>
                    <Box style={{color:"green"}}>
                        {data.description}
                    </Box>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <Box>
                        <b>ระดมทุนได้</b>
                        <Box style={{display:"flex"}}>
                            <b>{data.nowFund}</b> / {data.totalFund} 
                        </Box>
                    </Box>
                    
                        
                        <b>
                            {data.giver} givers
                        </b>
                    </div>
                   
                </Box></div></Link>)}
             
        </div>
    
      );
}
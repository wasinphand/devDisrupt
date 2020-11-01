import styles from '../styles/Home.module.css'
import { Icon } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Box, Heading, Image, Text, Stack, Progress } from "@chakra-ui/core";


const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download","https://aumento.officemate.co.th/media/catalog/product/O/F/OFM5000885_X2.jpg?imwidth=640"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
const Summary = () => (
    <ThemeProvider>
               <CSSReset/>
    <div >
        <Box
            bg="white"
            p={4}
            shadow="md"
            display="flex"
            flexDir="column"
            rounded="lg"
            
        >
            <b style={{fontSize:"30px",color:'teal'}}>
                สรุปผลการดำเนินการ โครงการ COVID-19
            </b>
        </Box>
       <table className={styles.table} style={{width:"85%"}}>
           <tr  className={styles.table}>
               <th  className={styles.table}><b>วันที่</b></th>
               <th  className={styles.table}><b>รายละเอียด</b></th>
               <th  className={styles.table}><b>จำนวนเงิน(บาท)</b></th>
               <th  className={styles.table}><b>ดูใบเสร็จ</b></th>
           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>10/11/62</th>
               <th  className={styles.table}>หน้ากากอนามัย</th>
               <th  className={styles.table}>5,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>

           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>11/11/62</th>
               <th  className={styles.table}>อุปกรณ์การแพทย์</th>
               <th  className={styles.table}>5,000,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>

           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>12/11/62</th>
               <th  className={styles.table}>อุปกรณ์การแพทย์</th>
               <th  className={styles.table}>2,000,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>
           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>12/11/62</th>
               <th  className={styles.table}>อุปกรณ์การแพทย์</th>
               <th  className={styles.table}>2,000,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>
           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>12/11/62</th>
               <th  className={styles.table}>อุปกรณ์การแพทย์</th>
               <th  className={styles.table}>2,000,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>
           </tr>
           <tr  className={styles.table}>
               <th  className={styles.table}>12/11/62</th>
               <th  className={styles.table}>อุปกรณ์การแพทย์</th>
               <th  className={styles.table}>2,000,000</th>
               <th onClick={(e)=>download(e)} className={styles.table}>   <Icon name="download" size="24px" />  </th>
           </tr>
       </table>
       <Box
            bg="white"
            p={4}
            shadow="md"
            display="flex"
            flexDir="column"
            rounded="lg"
            style = {{marginBottom:"35px"}}
        >
           <div>  <b style={{fontSize:"20px",color:"teal"}}>ผลการดำเนินงาน</b></div>
            <div style={{color:"blue"}}>โครงการ Thailand Recovery Fund ก่อตั้งโดยทีม Socialgiver มีเป้าหมายหลักในการระดมทุน จากการดำเนินงานต่างๆที่เราได้ทำไป เราได้ใช้งบประมาณที่ได้รับมา ไปซื้ออุปกรณ์ต่างๆตามที่แจ้งไว้ด้านบน
            จากที่เราได้ ดำเนินงานไป ได้รับผลการตอบรับจากหน่วยงานต่างๆเป็นอย่างดี และ ได้ช่วยสร้าง impact ให้กับสังคมเป็นอย่างมาก มีเป้าหมายหลักในการระดมทุน จากการดำเนินงานต่างๆที่เราได้ทำไป เราได้ใช้งบประมาณที่ได้รับมา ไปซื้ออุปกรณ์ต่างๆตามที่แจ้งไว้ด้านบน
            เราได้ใช้งบประมาณที่ได้รับมา ไปซื้ออุปกรณ์ต่างๆตามที่แจ้งไว้ด้านบน</div>
       </Box>
       <Box
            bg="white"
            p={4}
            shadow="md"
            display="flex"
            flexDir="column"
            rounded="lg"
            style = {{marginBottom:"35px"}}
        >
        <div>  <b style={{fontSize:"20px",color:"teal"}}>ทีมในการจัดงาน</b></div>
        <ol style={{color:"blue",paddingLeft:"20px"}}>
            <li>John S.</li>
            <li>James A.</li>
            <li>Random SS.</li>
        </ol>
       </Box>
       <Box
            bg="white"
            p={4}
            shadow="md"
            display="flex"
            flexDir="column"
            rounded="lg"
            style = {{marginBottom:"35px"}}
        >
       <div> <b style={{fontSize:"20px",color:"teal"}}>ผู้สนับสนุนสูงสุด 5 อันดับแรก</b></div>
       <ol style={{color:"blue",paddingLeft:"20px"}}>
           <li>John S. จำนวน ฿1,000,000 </li>
           <li>James A. จำนวน ฿800,000</li>
           <li>Random SS. จำนวน ฿500,000</li>
           <li>James A. จำนวน ฿400,000</li>
           <li>Random SS. จำนวน ฿300,000</li>
       </ol>
       </Box>
      
    </div>
    </ThemeProvider>
)
export default Summary;
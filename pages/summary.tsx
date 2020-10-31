import styles from '../styles/Home.module.css'
import { Icon } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

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
    <div>
        <b style={{fontSize:"30px"}}>
            สรุปผลการดำเนินการ โครงการ COVID-19
        </b>
       <table className={styles.table}>
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
       
    </div>
    </ThemeProvider>
)
export default Summary;
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {fetchData} from '../hookApi/testApi';
import {useEffect,useState} from 'react';

export default function Home() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetchData().then(function (res){
      setData(res);
    })

  },[data])


  return (
    <div className={styles.container}>
      Hello NextJS
  
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
      
    </div>
  )
}

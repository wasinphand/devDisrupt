import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Header} from '../Component/Header';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Boxes from '../Component/Boxes';

export default function Home() {

  return (
    <ThemeProvider>
       <CSSReset />
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
        <li>
          <Link href="/projectdetail">
            <a>Project-detail</a>
          </Link>
        </li>
        <li>
          <Link href="/Finance">
            <a>Finance</a>
          </Link>
        </li>
      </ul>
      
    </div>
    </ThemeProvider>
  )
}

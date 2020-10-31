import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ThemeProvider, CSSReset } from '@chakra-ui/core';


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
            <Link href="/Finance">
              <a>financeial tracker</a>
            </Link>
          </li>
        </ul>
      </div>
    </ThemeProvider>

  )
}

import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {




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

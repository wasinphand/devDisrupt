import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "../Component/Header";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Boxes from "../Component/Boxes";
import Navbar from "../Component/navbar";

export default function Home() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.banner}>
          100% of your donation via Socialgiver goes to social projects!
        </div>
        <Boxes />
      </div>
      <CSSReset />
      <div className={styles.container}></div>
    </ThemeProvider>
  );
}

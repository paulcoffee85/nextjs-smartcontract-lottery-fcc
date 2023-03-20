import Head from "next/head";
import "../styles/Home.module.css"; // In course video, Patrick has (import styles from "../styles/Home...") returns ERROR
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
// import Header from "../components/ManualHeader";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  );
}

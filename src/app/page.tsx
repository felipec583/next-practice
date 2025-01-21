import Image from "next/image";
import styles from "./pagi.module.css";
import { lusitana } from "@/fonts/fonts";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Home</h1>
        <p className={`${lusitana.className} ${styles["main-p"]} antialiased`}>
          Bobi
        </p>
        <Image
          src={"/globe.svg"}
          alt="logo"
          width={200}
          height={200}
          className={styles.abu}
        ></Image>
      </main>
      <Image
        src={"/next.svg"}
        width={100}
        height={200}
        alt="vercel logo"
      ></Image>
    </>
  );
}

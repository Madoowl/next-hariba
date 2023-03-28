import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Boutique from "./components/Boutique/Boutique";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Boutique></Boutique>
      </main>
      <Footer></Footer>
    </>
  );
}

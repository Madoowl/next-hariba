import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Boutique from "./components/Boutique/Boutique";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  //TODO create model for allPostsData PostData {id, title, date}
  return (
    <>
      <Head>
        <title> Hariba boutique </title>
      </Head>
      <Header />
      <main>
        <Boutique></Boutique>
      </main>
      <Footer></Footer>
    </>
  );
}

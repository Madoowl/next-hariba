import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header/Header";
import { getSortedPostsData } from "@/lib/post";

export async function getStaticProps() {
  const allPostsData: any = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function FirstPost({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <>
      <Head>
        <title>Notre histoire</title>
      </Head>
      <Header></Header>
      <div className="grid gap-4 grid-cols-1 grid-rows-3 items-center m-8">
        <h1 className="">Présentation</h1>
        <Image
          src="/images/profile.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="My mesh profile picture"
          className="basis-1/4"
        />
        <section className="basis-2/4">
          <h2 className="">Blog</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title }) => (
              <li className="" key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

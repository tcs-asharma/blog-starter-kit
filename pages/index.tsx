import { useEffect, useState } from 'react';
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  // const [counter, setCounter] = useState(0);

  // const handleOnClick = () => {
  //   setCounter(counter + 1);
  // }

  useEffect(() => {
    document.getElementById('header').style.color = 'red';
  }, []);
  
  return (
    <>
      <h1 id="header">
        Header from NExtJS app
      </h1>
{/*       <span>Counter: ${counter}</span>
      <button onClick={handleOnClick}>Click Mee..!</button> */}
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      allPosts,
      page: 'header',
    },
  };
};

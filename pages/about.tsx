import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { AboutUs } from "@components";

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DCAPLABS | About </title>
        <meta name="Dcaplabs About" content="Dcaplabs About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUs />
    </Fragment>
  );
};

export default About;

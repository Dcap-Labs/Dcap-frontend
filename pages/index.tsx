import { Fragment } from "react";
import type { NextPage } from "next";
import {
  SpecialFeatures,
  TheFirstDrop,
  WhoWeAre,
  DcapGameOne,
  InThePipeline,
  ExploreSivana,
} from "@components";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DCAPLABS | Home </title>
        <meta name="Dcaplabs Homepage" content="Dcaplabs Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WhoWeAre />
      <TheFirstDrop />
      <ExploreSivana />
      <SpecialFeatures />
      <DcapGameOne />
      <InThePipeline />
    </Fragment>
  );
};

export default Home;

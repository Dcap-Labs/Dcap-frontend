import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DropPage } from "@components";

const Drops: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DCAPLABS | Collaborators </title>
        <meta name="Dcaplabs Drops" content="Dcaplabs Drops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DropPage />
    </Fragment>
  );
};

export default Drops;

import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DcapAcademy } from "@components";

const Academy: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DCAPLABS | Academy </title>
        <meta name="Dcaplabs Academy" content="Dcaplabs Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DcapAcademy />
    </Fragment>
  );
};

export default Academy;

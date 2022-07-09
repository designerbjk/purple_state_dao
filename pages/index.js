import Head from "next/head";
import Nav from "./nav";
import Swap from "./swap";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Purple State DAO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Swap />
    </div>
  );
}

import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";



import Gallery from "../components/Gallery";
import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HGS Mandolia | Institute</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Gallery />
      <Form />
      
    </div>
  );
}

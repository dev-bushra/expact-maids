import Head from "next/head";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/shared/Navbar";
import FooterWithoutCards from "../components/shared/FooterWithoutCards";
import Contact from "../components/Desktop/Contact";
import ContactMobile from "../components/Mobile/Contact";
import NavbarMobile from "../components/Mobile/Navbar";
import { DefaultSeo } from "next-seo";
import { useState } from "react";
import {BsWhatsapp} from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_AE",
          url: "https://expatmaids.com",
          siteName: "Expat Maids",
        }}
        title="Get Your Maids Visa in Dubai - Fast & Hassle-Free | Expat Maids"
        description="Expat Maids offers fast and hassle-free maids visa services in Dubai. Our team of experts will guide you through the entire process. Contact us now!"
        keywords="maids visa Dubai, maid visa services, Dubai visa solutions, fast visa services, hassle-free visa services, Expat Maids."
      />
      <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container className="container" fluid>
        <div className="d-none d-xl-block">
          <Navbar useDarkLogo={true} />
          <Contact />
          <FooterWithoutCards />
        </div>
        <div className="d-block d-xl-none">
          <NavbarMobile useDarkLogo={true} />
          <ContactMobile />
          {/* <FooterWithoutCardsMobile /> */}
        </div>
      </Container>
    </div>
  );
}

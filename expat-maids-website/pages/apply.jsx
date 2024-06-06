import Head from "next/head";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/shared/Navbar";
import FooterWithoutCards from "../components/shared/FooterWithoutCards";
import ApplyForm from "../components/Desktop/ApplyForm";
import ApplyFormMobile from "../components/Mobile/ApplyForm";
import NavbarMobile from "../components/Mobile/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container className="container" fluid>
        <div className="d-none d-xl-block">
          <Navbar useDarkLogo={true} />
          <ApplyForm />
          <FooterWithoutCards />
        </div>
        <div className="d-block d-xl-none">
          <NavbarMobile useDarkLogo={true} />
          <ApplyFormMobile />
        </div>
      </Container>
    </div>
  );
}

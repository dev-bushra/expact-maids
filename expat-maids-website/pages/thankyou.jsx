import Head from "next/head";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/shared/Navbar";
import FooterWithoutCards from "../components/shared/FooterWithoutCards";
import ThankYou from "../components/Desktop/ThankYou";
import ThankYouMobile from "../components/Mobile/ThankYou";
import { useEffect } from "react";
import { useRouter } from "next/router";
 
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);
  return (
    <div>
      <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container className="container" fluid>
        <Navbar />
        <div className="d-none d-xl-block">
          <ThankYou />
          <FooterWithoutCards />
        </div>
        <div className="d-block d-xl-none">
          <ThankYouMobile />
        </div>
      </Container>
    </div>
  )
}
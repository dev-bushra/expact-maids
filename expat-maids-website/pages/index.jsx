import Head from "next/head";
import React, {
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { NextSeo } from "next-seo";

// BOOTSTRAP
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// DESKTOP
import Navbar from "../components/shared/Navbar";
import Banner from "../components/Desktop/Banner";
import About from "../components/Desktop/About";
import Service from "../components/Desktop/Service";
import Package from "../components/Desktop/Package";
import Customer from "../components/Desktop/Customer";
import Prefer from "../components/Desktop/Prefer";
import Platform from "../components/Desktop/Platform";
import JoinUs from "../components/Desktop/JoinUs";
import FAQ from "../components/Desktop/FAQ";
import Footer from "../components/shared/Footer";

// MOBILE
import NavbarMobile from "../components/Mobile/Navbar";
import BannerMobile from "../components/Mobile/Banner";
import AboutMobile from "../components/Mobile/About";
import ServiceMobile from "../components/Mobile/Service";
import PackageMobile from "../components/Mobile/Package";
import TestimonialsMobile from "../components/Mobile/Testimonials";
import PreferMobile from "../components/Mobile/Prefer";
import PlatformMobile from "../components/Mobile/Platform";
import JoinUsMobile from "../components/Mobile/JoinUs";
import FAQMobile from "../components/Mobile/FAQ";
import FooterMobile from "../components/Mobile/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import classNames from "classnames";

export default function Home() {
  const [entryAnim, setEntryAnim] = useState(false);
  const [y, setY] = useState(0);

  const waCall = () => {
    window.open("https://wa.me/971555190640");
  };

  useEffect(() => {
    window.addEventListener("scroll", entryAnimation);
  }, []);

  const entryAnimation = useCallback(
    (e) => {
      const window = e.currentTarget;
      console.log('window var is: ', window.scrollY);
      
      if (window.scrollY > 120) {
        setEntryAnim(true);
      } else if (window.scrollY <= 120) {
        setEntryAnim(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  return (
    <div>
      <Head>
        <NextSeo
          title="Expat Maids"
          description="description"
          canonical="https://www.website.ie/"
          openGraph={{
            url: "https://www.website.ie/",
            title: "Expat Maids",
            description: "description",
            images: [
              // {
              //   url: "https://nnn-expatmaids.s3.eu-central-1.amazonaawwss.com/images/og-image.png",
              //   width: 800,
              //   height: 600,
              //   alt: "Og Image Alt",
              // },
              // {
              //   url: "https://nnn-expatmaids.s3.eu-central-1.amazonaawwss.com/images/og-image.png",
              //   width: 900,
              //   height: 800,
              //   alt: "Og Image Alt Second",
              // },
              // { url: "https://nnn-expatmaids.s3.eu-central-1.amazonaawwss.com/images/og-image.png" },
              // { url: "https://nnn-expatmaids.s3.eu-central-1.amazonaawwss.com/images/og-image.png" },
            ],
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container fluid className="container exp_mainContainer">
        <div className="d-none d-xl-block">
          <div
            className={classNames(
              "sales_floating_tag",
              entryAnim ? "sales_entry" : ""
            )}
          >
            <FaTags className="icon" />
            <div>
              <b>SALE!</b> Save up to <b>AED 2,000</b> on 2 Years Maid's Visa
              Service
            </div>
          </div>
          <Navbar />
          <Banner />
          <Package />
          <Customer />
          <Prefer />
          <Platform />
          <JoinUs />
          <FAQ />
          <Footer />
        </div>
        <div className="d-block d-xl-none">
          <NavbarMobile />
          <div
            className={classNames(
              "sales_floating_tag sales_exit",
              entryAnim ? "sales_exit_reanimated" : ""
            )}
          >
            <FaTags className="icon" />
            <div>
              <b>SALE!</b> Save up to <b>AED 2,000</b> on 2 Years Maid's Visa
              Service
            </div>
          </div>
          <div className="whats_float" onClick={waCall}>
            <a href="" target="_blank" className="wa_container">
              <BsWhatsapp className="fa_whatsapp" />
              {/* <div className="number_container">
                  <span>WhatsApp</span>
                  <small>+971555190640</small>
                </div> */}
            </a>
          </div>
          <BannerMobile />
          {/* <AboutMobile /> */}
          {/* <ServiceMobile /> */}
          <PackageMobile />
          <TestimonialsMobile />
          <PreferMobile />
          <PlatformMobile />
          <JoinUsMobile />
          <FAQMobile />
          <FooterMobile />
        </div>
      </Container>
    </div>
  );
}

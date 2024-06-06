import * as React from "react";
import Head from "next/head";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/global.scss";
import Script from "next/script";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "../utils/gtm";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp(props) {
  const { Component, ...pageProps } = props;
  const router = useRouter();
  React.useEffect(() => {
    AOS.init({
      /* Add any custom AOS options here */
    });
  }, []);
  React.useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || "",
      url: router.pathname,
    };
    gtmVirtualPageView(mainDataLayer);
  }, [pageProps]);

  return (
    <main>
      <DefaultSeo {...SEO} />
      <SocialProfileJsonLd
        type="Organization"
        name="Expat Maids"
        url="https://expatmaids.com/"
        sameAs={[
          "https://www.linkedin.com/company/dynamicprofessionalservices/",
          "https://www.instagram.com/dynamic.cleaners/",
          "https://www.facebook.com/people/Expat-Maids/100063571302583/",
        ]}
      />
      <Head>
      <meta name="google-site-verification" content="hfxZuAJB9_8LvLqT5utQBINMeyd8MUPTQi7n0GBCxHk" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M8J8TJ6');`}
      </Script>
      <Component {...pageProps} />
    </main>
  );
}

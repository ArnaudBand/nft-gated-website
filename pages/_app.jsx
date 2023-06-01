import { ThirdwebProvider } from "@thirdweb-dev/react";
import { XdcApothemNetwork } from "@thirdweb-dev/chains";
import Head from "next/head";
// import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={XdcApothemNetwork}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>S3SH Game | Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
      </Head>
      <Component {...pageProps} />
      {/* <ThirdwebGuideFooter /> */}
    </ThirdwebProvider>
  );
}

export default MyApp;

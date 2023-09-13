import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="ff036d153ee26cd302df9a29b88792e8">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

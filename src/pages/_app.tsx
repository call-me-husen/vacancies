import { ReduxProvider } from "@/redux/provider";
import theme from "@/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ChakraBaseProvider>
  );
}

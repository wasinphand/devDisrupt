import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function Index({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Index;

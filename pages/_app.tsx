import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import MessengerCustomerChat from 'react-messenger-customer-chat';

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

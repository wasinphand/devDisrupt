import { ThemeProvider, CSSReset, SimpleGrid, Heading } from "@chakra-ui/core";

import PageLayout from "../Component/PageLayout";
import Card from "../Component/card";

import { datas } from "../hookApi/mockData";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Home() {
  return (

    <ThemeProvider>
      <MessengerCustomerChat
        pageId="113192920586080"
        appId="2778967335539406"
      />

      <CSSReset />
      <PageLayout>
        <Heading mb={4}>โครงการที่น่าสนใจสำหรับคุณ</Heading>
        <SimpleGrid columns={3} spacing={4}>
          {datas.map((data) => {
            return (
              <>
                <Card {...data} key={data.id} />
              </>
            );
          })}
        </SimpleGrid>
      </PageLayout>
    </ThemeProvider>
  );
}

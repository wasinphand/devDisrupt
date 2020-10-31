import { ThemeProvider, CSSReset, SimpleGrid, Heading } from "@chakra-ui/core";

import PageLayout from "../Component/PageLayout";
import Card from "../Component/Card";

import { datas } from "../hookApi/mockData";

export default function Home() {
  return (
    <ThemeProvider>
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

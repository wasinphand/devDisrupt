import { Box, Image, SimpleGrid } from "@chakra-ui/core";
import { datas } from "../hookApi/mockData";
import Card from "../Component/card";

export default function Boxes() {
  return (
    <Box px={8}>
      <SimpleGrid columns={3} spacing={4}>
        {datas.map((data) => {
          return (
            <>
              <Card {...data} key={data.id} />
            </>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

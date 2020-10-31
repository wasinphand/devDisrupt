import {
  Badge,
  ThemeProvider,
  CSSReset,
  Stack,
  Text,
  Flex,
  Box,
  Heading,
  Image,
  Button
} from "@chakra-ui/core";
import Link from "next/link";

export default function Expence_1() {
  function Feature({ title, desc, money, linkto, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="s">{money}</Heading>
        <Text mt={4}>{desc}</Text>
        <Link href={linkto}>
          <Button>See more</Button>
        </Link>
      </Box>
    );
  }
  return (
    <ThemeProvider>
      <CSSReset />
      <div>
        <Box>
          <Flex align="center" justify="center">
            <Text fontSize="5xl" fontWeight="bold">
              <Badge ml="1" fontSize="0.8em" variantColor="green">
                Expense 1
              </Badge>
            </Text>
          </Flex>
          <Flex align="center" mx={100}>
            <Flex>
              <Image
                mx={5}
                src="https://www2.cortland.edu/cost-aid/images/samplebill.png"
              />
              <Image
                mx={5}
                src="https://www.paiteawduaykan.com/upload/article/glsavkq3xhil83k58zwqzd2l52ven9lzwkourmrr8mzbd8selzxuynfzhpxf.jpg"
              />
            </Flex>
            <Flex></Flex>
          </Flex>
        </Box>
      </div>
    </ThemeProvider>
  );
}

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

function Sidecard() {
  const property = {
    imageUrl:
      "https://muic.mahidol.ac.th/eng/wp-content/uploads/2019/12/07_MUIC_volunteer_camp_korat.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Volunteer camp at rural area",
    formattedPrice: "40,900.00",
    reviewCount: 34,
    rating: 4
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            Total used
          </Box>
          <Badge mx="3" fontSize="1.2em" variantColor="green">
            {property.formattedPrice}
          </Badge>
          <Box as="span" color="gray.600" fontSize="sm">
            Baht
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
function Featurefinance({ title, desc, money, linkto, ...rest }) {
  return (
    <Box rounded="20px" p={5} my={5} shadow="md" borderWidth="1px" {...rest}>
      <Flex>
      <Heading fontSize="xl">{title}</Heading>
      <Link href={linkto}>
        <Button ml="auto">See more</Button>
      </Link>
      </Flex>
      <Heading fontSize="s">{money}</Heading>
      <Text my={4}>{desc}</Text>
      
    </Box>
  );
}

export default function Financialcomponent() {
  return (
    <Box>

      <Box mx="auto" bg="gray.300" p={3} textAlign="center" rounded="15px" width="50%">
                <Text fontSize="20px">
                Finance tracking
                    </Text>
            </Box>
      <Flex align="center">
        <Flex>
          <Stack spacing={4}>
            <Featurefinance
              title="Expense 1"
              money="5000 baht"
              desc="The future can be even brighter but a goal without a plan is just a wish"
              linkto="/Expense_1"
            />
            <Featurefinance
              title="Expense 2"
              money="4500 baht"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              linkto="/Expense_1"
            />
            <Featurefinance
              title="Expense 3"
              money="3000 baht"
              desc="The future can be even brighter but a goal without a plan is just a wish"
              linkto="/Expense_1"
            />
            <Button variantColor="teal" variant="outline">
              See more
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

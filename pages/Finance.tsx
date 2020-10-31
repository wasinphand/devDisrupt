import { Badge, ThemeProvider, CSSReset, Stack, Text, Flex, Box, Heading, Image } from "@chakra-ui/core";

function AirbnbExample() {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };

    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                        New
            </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {property.beds} beds &bull; {property.baths} baths
            </Box>
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
                    {property.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default function Finance() {
    function Feature({ title, desc, money, ...rest }) {
        return (
            <Box p={5} shadow="md" borderWidth="1px" {...rest}>
                <Heading fontSize="xl">{title}</Heading>
                <Heading fontSize="s">{money}</Heading>
                <Text mt={4}>{desc}</Text>
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
                                Finance tracking
                            </Badge>
                        </Text>
                    </Flex>
                    <Flex align='center'>
                        <Flex width='120vw' m={4} ml={20} >
                            <Stack spacing={8}>
                                <Feature
                                    title="Expense 1"
                                    money='5000 baht'
                                    desc="The future can be even brighter but a goal without a plan is just a wish"
                                />
                                <Feature
                                    title="Expense 2"
                                    money='4500 baht'
                                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                                />
                                <Feature
                                    title="Expense 3"
                                    money='3000 baht'
                                    desc="The future can be even brighter but a goal without a plan is just a wish"
                                />
                                <Feature
                                    title="Expense 4"
                                    money='2000 baht'
                                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                                />
                            </Stack>
                        </Flex>
                        <Flex width='60vw'>
                            <AirbnbExample/>
                        </Flex>

                    </Flex>
                </Box>
            </div>
        </ThemeProvider>



    )
}


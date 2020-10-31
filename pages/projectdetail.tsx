import { Box, Flex, Text, Stack, Badge, Image, Button } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import {withRouter} from 'next/router';
import {datas} from '../hookApi/mockData';
// Sample card from Airbnb

function AirbnbExample() {
    const property = {
        imageUrl: "https://d36m266ykvepgv.cloudfront.net/uploads/media/HsFp1O2KHY/s-368-252/icon-sponsors2.png",
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
                        Package
            </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {property.beds} bath &bull; {property.baths} baths
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

                <Box d="flex" mt="2" alignItems="center">

                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.reviewCount} reviews
            </Box>
                </Box>
            </Box>
        </Box>
    );
}
//function Projectdetail() 
const Projectdetail = ({router}) =>  (
        <ThemeProvider>
            <CSSReset />
            <div>
                <h1>Project detail </h1>
                <Flex width="70vw" p="6" align="center">
                    <Flex align="flex-end">
                        <Box >
                            <Text>
                                {datas[router.query.id].description}
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex width="73vw" align="flex-top">
                        <Box>
                            <Box textAlign="center">
                                <Image mt={4} mx="auto" width="80%" rounded="30px" src={datas[router.query.id].picture} alt="Segun Adebayo" />
                            </Box>
                            <Box mt={5} mx={10}>
                                <Text>ระดมทุนได้</Text>
                            </Box>
                            <Box mx={10}>
                                <Flex>
                                    <Box width="50vw">
                                        <Text fontSize="30px">฿{datas[router.query.id].nowFund} </Text>
                                    </Box>
                                    <Box>

                                        <Button variantColor="teal" variant="outline">
                                            Button
                                        </Button>
                                    </Box>
                                </Flex>



                            </Box>


                        </Box>



                    </Flex>
                    <Flex bg="gray.50" width="27vw" align="center" justify="center">

                        <Box px={4} width="100%" mt={4} mb={2} mx="auto">
                            <Box textAlign="center">
                                คุณกำลังสนับสนุนโครงการxxxxxxxThailand Recovery Fund
                            </Box>
                            <Box>
                                <AirbnbExample />
                            </Box>
                            <Box mt={4}>
                                <AirbnbExample />
                            </Box>
                            <Box mt={4}>
                                <AirbnbExample />
                            </Box>


                        </Box>
                    </Flex>
                </Flex>

            </div>
        </ThemeProvider>
    )
export default withRouter(Projectdetail);
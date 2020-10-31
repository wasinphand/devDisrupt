import { Box, Flex, Text, Stack, Progress, Badge, Image, Button, TabPanel, TabPanels, Tab, Tabs, TabList } from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { withRouter } from 'next/router';
import { datas } from '../hookApi/mockData';
// Sample card from Airbnb

function AirbnbExample() {
    const property = {
        imageUrl: "https://thumbs.dreamstime.com/b/sponsor-stamp-vector-sign-seal-logo-isolated-white-background-86263619.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };

    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" boxShadow="1px 1px 10px #E2E8F0">
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box bg="white" p="6">
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
const Projectdetail = ({ router }) => (
    <ThemeProvider>
        <CSSReset />
        <div>
            <Flex>
                <Flex width="70vw" align="flex-top">
                    <Box>
                        <Box p={6}>
                            <Text>
                                {datas[router.query.id].description}
                            </Text>
                        </Box>
                        <Box textAlign="center">
                            <Image boxShadow="1px 1px 10px #E2E8F0" mt={4} mx="auto" width="80%" rounded="30px" src={datas[router.query.id].picture} alt="Segun Adebayo" />
                        </Box>
                        <Box mt={5} mx={10}>
                            <Text>ระดมทุนได้</Text>
                        </Box>
                        <Box mx={10} width="87%">
                            <Flex>
                                <Box width="50vw">
                                    <Flex align="flex-end">
                                        <Text fontSize="30px">฿{datas[router.query.id].nowFund}</Text>
                                        <Text mb={1} fontSize="15px" color="gray.500" > / ฿200,000</Text>
                                    </Flex>

                                </Box>
                                <Box ml="auto">

                                    <Button width="100%" variantColor="teal" variant="outline">
                                        112 givers
  </Button>

                                </Box>
                            </Flex>



                        </Box>
                        <Box>
                            <Progress mt={2} mx={10} size="md" value={33} hasStripe isAnimated />
                        </Box>

                        <Box px={10} mt={5}>
                            <Tabs isManual variant="enclosed">
                                <TabList>
                                    <Tab>รายละเอียด</Tab>
                                    <Tab>ข้อมูลกิจกรรม</Tab>
                                    <Tab>ข้อมูลการใช้เงิน</Tab>
                                    <Tab>แสดงความคิดเห็น</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel p={5}>
                                        {/* detail */}
                                        <p>รายละเอียด!</p>
                                    </TabPanel>
                                    <TabPanel p={5}>
                                        {/* activity track */}
                                        <p>ข้อมูลกิจกรรม!</p>
                                    </TabPanel>
                                    <TabPanel p={5}>
                                        {/* finacail track */}
                                        <p>ข้อมูลการใช้เงิน!</p>
                                    </TabPanel>
                                    <TabPanel p={5}>
                                        {/* comment */}
                                        <p>แสดงความคิดเห็น!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </Box>
                </Flex>
                <Flex bg="gray.50" width="30vw" align="center" justify="center">

                    <Box px={8} width="100%" mt={4} mb={2} mx="auto">
                        <Box mb={2} textAlign="center">
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
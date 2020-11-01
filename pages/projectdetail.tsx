import {
  Box,
  Flex,
  Text,
  Stack,
  Progress,
  Badge,
  Image,
  Button,
  TabPanel,
  TabPanels,
  Tab,
  Tabs,
  TabList,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
} from "@chakra-ui/core";
import { withRouter } from "next/router";
import { datas } from "../hookApi/mockData";

import Activitycomponent from "../Component/Activitytrack";
import Financialcomponent from "../Component/Financialtrack";
import Commentcomponent from "../Component/Commentdetail";
import PageLayout from "../Component/PageLayout";


// Sample card from Airbnb

function AirbnbExample() {
  const property = {
    imageUrl:
      "https://thumbs.dreamstime.com/b/sponsor-stamp-vector-sign-seal-logo-isolated-white-background-86263619.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      boxShadow="1px 1px 10px #E2E8F0"
    >
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
const Projectdetail = ({ router }) => {
  const data = datas[router.query.id];

  return (
    <PageLayout>
      <Flex bg="white">
        <Flex width="70vw" align="flex-top">
          <Box>
            <Box p={6}>
              <Heading>{datas[router.query.id].title}</Heading>
              <Text fontSize="xl" color="gray.500">
                {data.description}
              </Text>
            </Box>
            <Box textAlign="center">
              <Image
                boxShadow="1px 1px 10px #E2E8F0"
                mt={4}
                mx="auto"
                width="80%"
                rounded="30px"
                src={datas[router.query.id].picture}
                alt="Segun Adebayo"
              />
            </Box>
            <Box mt={5} mx={10}>
              <Text>ระดมทุนได้</Text>
            </Box>
            <Box mx={10} width="87%">
              <Flex>
                <Box width="50vw">
                  <Flex align="flex-end">
                    <Text fontSize="30px">
                      ฿{datas[router.query.id].nowFund}
                    </Text>
                    <Text mb={1} fontSize="15px" color="gray.500">
                      {" "}
                      / ฿{datas[router.query.id].totalFund}
                    </Text>
                  </Flex>
                </Box>
                <Box ml="auto">
                  <Button width="100%" variantColor="teal" variant="outline">
                    {datas[router.query.id].giver} givers
                  </Button>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Progress
                mt={2}
                mx={10}
                size="md"
                color="teal"
                value={(data.nowFund / data.totalFund) * 100}
              />
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
                    <Heading size="lg" mt={8} mb={4}>
                      รายละเอียดเกี่ยวกับโครงการ
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      โครงการ Covid Relief
                      ก่อตั้งขึ้นจากความร่วมมือขององค์กรที่กำลังเผชิญกับผลกระทบจากโรคติดเชื้อไวรัสโคโรนา
                      (โควิด 19) ทั้งในด้านปัญหาสุขภาพ และ ปัญหาเศรษฐกิจ
                      ด้วยเหตุนี้มูลนิธิสติ (http://sati.or.th/) ร่วมกับมูลนิธิ
                      Scholars of Sustenance
                      (https://www.scholarsofsustenance.org/) และ Urban Studies
                      Lab (https://www.facebook.com/UrbanStudiesLab)
                      เพื่อดำเนินการให้ความช่วยเหลือผู้ที่ได้รับผลกระทบจากสถานการณ์ดังกล่าว
                      โดยได้รับการสนับสนุนจาก Bangkok 1899 และ
                      สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพอีกด้วย
                    </Text>

                    <Heading size="lg" mt={8} mb={4}>
                      ปัญหา
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      สถานการณ์การแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนาส่งผลกระทบต่อการใช้ชีวิตของพวกเราทุกคน
                      และดูเหมือนว่าในอนาคตสถานการณ์จะทวีความรุนแรงยิ่งกว่านี้อีกหลายเท่าตัว
                      <br />
                      <br />
                      ในขณะที่คนบางกลุ่มที่อาศัยอยู่ในจังหวัด กรุงเทพฯ
                      สามารถรับมือกับสถานการณ์ดังกล่าวได้ ด้วยการกักตัวอยู่บ้าน
                      เพื่อลดโอกาสในการติดเชื้อไวรัส
                      แต่กลุ่มผู้มีรายได้น้อยในกรุงเทพ ฯ อีกจำนวนมาก
                      กลับไม่มีโอกาสในการอยู่บ้านเพื่อปกป้องตัวเองได้เลย
                      เนื่องด้วยอาชีพที่หาเช้ากินค่ำ
                      จึงจำเป็นต้องออกไปทำงานเพื่อหารายได้มาจุนเจือสมาชิกในครอบครัว
                      ดังนั้นกลุ่มผู้มีรายได้น้อยจึงมีโอกาสในการติดเชื้อไวรัสดังกล่าวสูงมากเป็นพิเศษ
                      โดยเฉพาะหากเกิดขึ้นในกลุ่มผู้สูงอายุที่มีโรคประจำตัวก่อนหน้านี้ด้วยแล้วนั้น
                      อาการจะยิ่งทวีความรุนแรง และได้รับผลกระทบมากกว่าคนปกติ
                      <br />
                      <br />
                      ผลกระทบในระยะสั้น: อัตราการแพร่ระบาดควรลดน้อยลง
                      เพื่อลดภาระให้แก่บุคลากรทางการแพทย์
                      และลดความสูญเสียในกระบวนการรักษา <br />
                      <br />
                      ผลกระทบในระยะยาว:
                      สถานการณ์เศรษฐกิจที่ย่ำแย่จะส่งผลกระทบต่อครอบครัวที่รายได้หลักมาจากอุตสาหกรรมทางการท่องเที่ยว
                      ซึ่งขณะนี้ทุกอาชีพต่างได้รับผลกระทบเช่นเดียวกันหมด
                    </Text>

                    <Heading size="lg" mt={8} mb={4}>
                      วิธีการช่วยเหลือ
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      Covid Relief ได้วางแผนแจกจ่ายผลิตภัณฑ์เพื่อสุขอนามัย เช่น
                      หน้ากากอนามัย แอลกอฮอล์ทําความสะอาดมือ เจล สบู่
                      รวมถึงอาหารสําเร็จรูป
                      ให้แก่ผู้ที่มีรายได้น้อยที่ได้รับผลกระทบจากโควิด 19
                      ทั้งนี้เราได้รับความช่วยเหลือจาก Health Volunteer
                      Foundation
                      ซึ่งจะช่วยให้การแจกจ่ายนี้ดำเนินไปอย่างระมัดระวังที่สุด
                      เพื่อหลีกเลี่ยงการแพร่กระจายของเชื้อไวรัส
                      นอกจากนี้เราจะใช้ข้อมูลทางประชากรศาสตร์เพื่อระบุและค้นหาแหล่งที่อยู่ของชุมชน
                      ที่มีความขาดแคลนมากที่สุดโดยประเมินจากอายุและรายได้เป็นหลัก
                    </Text>

                    <Heading size="lg" mt={8} mb={4}>
                      เงินบริจาคของคุณจะถูกนำไปช่วยอย่างไร
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      ทุก 300 บาท
                      คุณสามารถส่งมอบผลิตภัณฑ์เพื่อสุขอนามัยและอาหารสำเร็จรูปให้แก่
                      1 ครอบครัว (สมาชิก 4 คน) / 1 สัปดาห์
                      <br />
                      <br />
                      ทั้งนี้ปริมาณในการจัดซื้อสินค้าดังกล่าว
                      ขึ้นอยู่กับยอดบริจาค ซึ่งมีรายการสินค้า ดังนี้
                      หน้ากากอนามัย แอลกอฮอล์ทําความสะอาดมือ เจลล้างมือ สบู่
                      ผงซักฟอก อาหารกระป๋อง ข้าวสาร ผลไม้ ไข่
                      วัตถุดิบในการปรุงอาหาร ถุงมือ หน้ากากคลุมหน้า ชุดอนามัย
                      เป็นต้น
                    </Text>
                  </TabPanel>
                  <TabPanel p={5}>
                    {/* activity track */}
                    {/* <p>ข้อมูลกิจกรรม!</p> */}
                    <Activitycomponent />
                  </TabPanel>
                  <TabPanel p={5}>
                    {/* finacail track */}
                    <Financialcomponent />
                  </TabPanel>
                  <TabPanel p={5}>
                    {/* comment */}
<Commentcomponent/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Flex>
        <Flex bg="gray.50" width="30vw" align="flex-top" justify="center">
          <Stack spacing={8} mt="20vh">
            <Box px={8} width="100%" mt={4} mb={2} mx="auto">
              <Box mb={2} textAlign="center">
                คุณกำลังสนับสนุนโครงการ {datas[router.query.id].title}
              </Box>
              <Box>
                <Text>สำหรับบริษัท</Text>
              </Box>
              <Box>
                <Button width="100%">ติดต่อโครงการ</Button>
              </Box>
              <Box>
                <FormControl id="Money" isRequired>
                  <FormLabel>จำนวนเงินที่ต้องการบริจาค</FormLabel>
                </FormControl>
                <Input placeholder="1000" />
                <FormControl id="first-name" isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
                </FormControl>
                <FormControl id="last-name" isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </PageLayout>
  );
};
export default withRouter(Projectdetail);

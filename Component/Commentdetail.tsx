import { Box, Image, Text, Flex, Heading ,Button,Badge,Stack} from "@chakra-ui/core";

function Comment({ title, desc, linkim, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Flex>
          <Flex>
            <Image rounded="full" size="30px" src={linkim} />
            <Heading mx={3} my={1} fontSize="xl">
              {title}
            </Heading>
          </Flex>
        </Flex>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
  function CommentCore({ title, desc, linkim, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Flex>
          <Flex>
            <Image rounded="full" size="30px" src={linkim} />
            <Heading mx={3} my={1} fontSize="xl">
              {title}
              <Badge variantColor="red" fontSize="xl" ml={2}>
                Core Team
              </Badge>
            </Heading>
          </Flex>
        </Flex>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }
export default function Commentcomponent() {
    return (
        <Box>
        <Flex align="center" justify="center">
          <Text fontSize="5xl" fontWeight="bold">
            <Badge my="10" fontSize="0.8em" variantColor="green">
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
        </Flex>
        <Flex justify="center" mx={180} my={5}>
          <Feature
            my={5}
            title="Expense 1"
            money="5000 baht"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            linkto="/Expense_1"
          />
        </Flex>
        <Flex justify="center">
          <Text fontSize="5xl" fontWeight="bold">
            <Badge fontSize="0.8em" variantColor="white">
              Comment
            </Badge>
          </Text>
        </Flex>
        <Flex justify="center">
          <Stack spacing={3}>
            <Comment
              title="Name Surname"
              desc="The future can be even brighter but a goal without a plan is just a wish"
              linkim="https://sabur.me/images/Sabur_Khan/Sabur%20Khan%20(14).jpg"
            />
            <CommentCore
              ml={100}
              title="Name Surname"
              desc="The future can be even brighter but a goal without a plan is just a wish"
              linkim="https://sabur.me/images/Sabur_Khan/Sabur%20Khan%20(14).jpg"
            />
            <Comment
              title="Name Surname"
              desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              linkim="https://assets.abfrlcdn.com/img/app/product/3/357683-1789681-large.jpg"
            />
          </Stack>
        </Flex>
      </Box> 
    );
}
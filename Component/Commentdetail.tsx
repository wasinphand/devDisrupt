import { PseudoBox, Box, Image, Text, Flex, Heading, Button, Badge, Stack } from "@chakra-ui/core";

function Comment({ title, desc, linkim, ...rest }) {
    return (
        <Box rounded="20px" p={5} shadow="md" borderWidth="1px" {...rest}>
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
function Feature({ title, desc, money, linkto, ...rest }) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest}>
            <Heading fontSize="xl">{title}</Heading>
            <Heading fontSize="s">{money}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    );
}
function CommentCore({ title, desc, linkim, ...rest }) {
    return (
        <Box rounded="20px" p={5} shadow="md" borderWidth="1px" {...rest}>
            <Flex>
                <Flex>
                    <Image rounded="full" size="30px" src={linkim} />
                    <Heading mx={3} my={1} fontSize="xl">
                        {title}
                        <Badge p={1} variantColor="red" fontSize="sm" ml={2}>
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
         

            <Box mb={4} mx="auto" bg="gray.300" p={3} textAlign="center" rounded="15px" width="50%">
                <Text fontSize="20px">
                Comment
                    </Text>
            </Box>
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
            <Flex mt={5} as="form">
                <PseudoBox
                    as="input"
                    placeholder="Your Question / Advice"
                    // type="email"
                    flex="1"
                    py={2}
                    px={4}
                    rounded="md"
                    bg="gray.100"
                    borderWidth="1px"
                    _hover={{ borderColor: "gray.200", bg: "gray.200" }}
                    _focus={{
                        outline: "none",
                        bg: "white",
                        boxShadow: "outline",
                        borderColor: "gray.300",
                    }}
                />
                <PseudoBox
                    as="button"
                    bg="teal.500"
                    py={2}
                    px={4}
                    ml={3}
                    rounded="md"
                    fontWeight="semibold"
                    color="white"
                    _hover={{ bg: "teal.600" }}
                    _focus={{ boxShadow: "outline" }}
                >
                    Send
  </PseudoBox>
            </Flex>
        </Box>

    );
}
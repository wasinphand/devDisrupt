import { Box, Image, Text, Flex, Heading, Button, Badge, Stack } from "@chakra-ui/core";

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
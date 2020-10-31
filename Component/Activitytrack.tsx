import { Box, Image, Text, Flex, Heading ,Button} from "@chakra-ui/core";

function Feature({ done, title, desc, ...rest }) {
    return (
        <Box rounded="20px" p={5} my={5} shadow="md" borderWidth="1px" {...rest}>
            <Flex>
                <Heading fontSize="xl">{title}</Heading>
                {done ? <Button ml="auto" variantColor="teal" size="sm">
                    Done
  </Button> : <Button ml="auto" variantColor="red" size="sm" isDisabled>
                    Not yet
  </Button>}

            </Flex>

            <Text mt={4}>{desc}</Text>
        </Box>
    );
}
export default function Activitycomponent() {
    return (
        <Box>
            <Box mx="auto" bg="gray.300" p={3} textAlign="center" rounded="15px" width="50%">
                <Text fontSize="20px">
                    Activity track
                    </Text>
            </Box>
            <Box>
                <Feature
                    done={true}
                    title="1.Save Money"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                />
                <Feature
                    done={false}

                    title="2.Save Money"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                />

            </Box>
        </Box>
    );
}
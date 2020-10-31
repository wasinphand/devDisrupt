import React from "react";
import { Box, Heading, Image, Text, Stack, Progress } from "@chakra-ui/core";
import Link from "next/link";

const Card = ({
  id,
  title,
  picture,
  shortDesc,
  description,
  nowFund,
  totalFund,
  giver,
}) => {
  return (
    <Link href={`projectdetail?id=${id - 1}`}>
      <Box
        bg="white"
        p={4}
        shadow="sm"
        display="flex"
        flexDir="column"
        rounded="lg"
      >
        <Stack spacing={2}>
          <Image
            src={picture}
            objectFit="cover"
            htmlWidth="100%"
            height="200px"
            rounded="lg"
          />
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm">{shortDesc}</Text>
          <Text color="teal.400" fontSize="sm">
            {description}
          </Text>
          <Box>
            <Text color="gray.400" fontSize="xs" mb={1}>
              ระดมทุนได้
            </Text>
            <Progress
              value={(nowFund / totalFund) * 100}
              color="teal"
              size="sm"
              mb={2}
            />
            <Box display="flex" flexDir="row" justifyContent="space-between">
              <Box display="flex" dir="row">
                <Text color="teal.400">฿{nowFund}</Text>
                <Text color="gray.400">/฿{totalFund}</Text>
              </Box>
              <Box display="flex" dir="row">
                <Text color="teal.400" mr={1}>
                  {giver}
                </Text>{" "}
                givers
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default Card;

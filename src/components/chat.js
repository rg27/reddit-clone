import { Box, HStack, Text } from "@chakra-ui/core";
import React from "react";

const Chat = ({ post }) => {
  return (
    <HStack  w="100%" alignItems="flex-start">
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{post.title}</Text>
      </Box>
    </HStack>
  );
};

export default Chat;

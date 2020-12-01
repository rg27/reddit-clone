import { Box, HStack, Text } from "@chakra-ui/core";
import React from "react";


import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table
} from 'reactstrap';

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

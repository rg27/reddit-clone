import {  Flex, Spinner, VStack } from "@chakra-ui/core";
import AddNewPost from "./add-new-post"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container
} from 'reactstrap';
import React, { useEffect, useState } from "react";

import Chat from "./chat";

import db from "../lib/firebase";

const Chatbox = () => {
  const [chats, setChats] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("chats")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setChats(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("chats")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setChats(_posts);
      });
  }, []);

  if (isLoading) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <>
    
          <Card>
          <AddNewPost/>
            <CardBody>
          
                <Container maxW="md" centerContent p={8}>
                  <div className="d-flex align-items-center">
                      <div>
                          <CardTitle>Messages</CardTitle>
                          {/* <CardSubtitle>Overview of the Latest Voting</CardSubtitle> */}
                      </div>
                  </div>
                  <VStack spacing={4} w="100%">
                    {chats.map((chat) => (
                      <Chat post={chat} key={chat.id} />
                    ))}
                  </VStack>
                </Container>
            </CardBody>
          </Card>
     
    </>
  );
};

export default Chatbox;

import {  Flex, Spinner, VStack } from "@chakra-ui/core";
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

import Post from "./components/post";
import db from "./lib/firebase";
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const VoteTally = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
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
    <div className="app-background">
      <Container >
          <Card>
            <CardBody>
                  <div className="d-flex align-items-center">
                      <div>
                          <CardTitle>Tiktok Challenge Voting</CardTitle>
                          <CardSubtitle>Overview of the Latest Voting</CardSubtitle>
                      </div>
                  </div>

                  <VStack spacing={2} w="100%">
                    {posts.map((post) => (
                      <Post post={post} key={post.id} />
                    ))}
                  </VStack>
            </CardBody>
          </Card>
          </Container>
    </div>
    </>
  );
};

export default VoteTally;

import {  Flex, Spinner, VStack } from "@chakra-ui/core";
// import ParticlesBg from "particles-bg";
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
import Navbar from "./components/navbar";
import Post from "./components/post";
import Footer from "./components/footer";
import Contact from "./contact";
import Kahot from "./components/kahot";
import db from "./lib/firebase";
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const App = () => {
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
      <Navbar />
      <Container >
          <Card>
            <CardBody>
            
                  <div className="d-flex align-items-center">
                      <div>
                          <CardTitle>Latest Tally</CardTitle>
                          <CardSubtitle>Overview of the Latest Voting</CardSubtitle>
                      </div>
                  </div>
                  <VStack spacing={4} w="100%">
                    {posts.map((post) => (
                      <Post post={post} key={post.id} />
                    ))}
                  </VStack>
             
            </CardBody>
          </Card>
          </Container>
          <Kahot/>
          <Contact/>
      <Footer/>
      {/* <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} /> */}
    
      </div>
    </>
  );
};

export default App;

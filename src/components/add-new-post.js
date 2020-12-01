import {
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useState } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [isSaving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);

    const date = new Date();

    await db.collection("chats").add({
      title,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString(),
    });

    onClose();
    setTitle("");
    setSaving(false);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Add new message
      </Button>

     
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
       
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="post-title">
                <FormLabel>Compose a message</FormLabel>
                <Textarea
                  type="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  disabled={!title.trim()}
                  isLoading={isSaving}
                >
                  Save
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AddNewPost;

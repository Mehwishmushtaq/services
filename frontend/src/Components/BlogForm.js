import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog submitted:", formData);

    fetch("http://localhost:8000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Blog created:", data);
        setFormData({
          title: "",
          content: "",
          author: "",
        });
      })
      .catch((error) => console.error("Error creating blog:", error));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        rounded={"md"}
        boxShadow={"lg"}
        w={["full", "md"]}
        mx={4}
      >
        <Stack spacing={4}>
          <Heading as="h2" fontSize={"2xl"} textAlign={"center"}>
            Create a New Blog
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="title" isRequired>
              <FormLabel>Blog Title</FormLabel>
              <Input
                type="text"
                name="title"
                placeholder="Enter your blog title"
                onChange={handleChange}
                value={formData.title}
                bg={useColorModeValue("gray.100", "gray.900")}
                focusBorderColor="blue.900"
              />
            </FormControl>

            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea
                name="content"
                placeholder="Write your blog content here..."
                onChange={handleChange}
                value={formData.content}
                bg={useColorModeValue("gray.100", "gray.900")}
                focusBorderColor="blue.900"
                rows={6}
              />
            </FormControl>

            <FormControl id="author" isRequired>
              <FormLabel>Author Name</FormLabel>
              <Input
                type="text"
                name="author"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.author}
                bg={useColorModeValue("gray.100", "gray.900")}
                focusBorderColor="blue.900"
              />
            </FormControl>

            <Stack spacing={6} mt={4}>
              <Button
                type="submit"
                bg="blue.900"
                color="white"
                _hover={{ bg: "teal.950" }}
                w="full"
              >
                Submit Blog
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BlogForm;

import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };

  const onChange = () => {}
  return (
    <Container className="mt-5"
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      px={{ base: 4, sm: 6 }} 
    >
      <Stack spacing={8} mx={"auto"}
      maxW={{ base: "full", md: "lg", lg: "xl" }}
       py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Send email to the account</Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
            Don't forget to subscribe ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={{ base: "full", sm: "auto" }}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Receiver's Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Subject</FormLabel>
              <Input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Enter the subject here..."
              />
            </FormControl>
            <FormControl id="text">
              <FormLabel>Message</FormLabel>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here..."
              />
            </FormControl>
            <ReCAPTCHA
              sitekey="6LfSH0AqAAAAAOF109U-r282fVvG36pWVVyDj2_D"
              onChange={onChange}
              style={{ width: '100%', height: 'auto' }} 
            />,
            <Stack spacing={10}>
              <Button
                bg={"blue.900"}
                color={"white"}
                _hover={{
                  bg: "blue.950",
                }}
                onClick={() => sendEmail()}
              >
                Send Email
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
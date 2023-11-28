import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Heading, Text } from "@chakra-ui/react";

type UserData = {
  email: string;
  password: string;
  // other properties
};

const User = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("isLoggedIn");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box
        p={4}
        maxWidth="800px"
        mx="auto"
        justifyContent={"center"}
        bg={"white"}
        boxShadow={"lg"}>
        {userData ? (
          <Box>
            <Heading as="h2" size="md" mb="4">
              User Data:
            </Heading>
            <Box>
              <Text>Email: {userData.email}</Text>
              <Text>Password: {userData.password}</Text>
            </Box>
          </Box>
        ) : (
          <Text>No user data found</Text>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default User;

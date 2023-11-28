import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  currentTime: string;
  // Tambahkan field lain jika diperlukan
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data.email);
    console.log(data.password);
    const now = new Date();
    const currentTimeString = now.toLocaleTimeString();

    data.currentTime = currentTimeString;

    sessionStorage.setItem("isLoggedIn", JSON.stringify(data));
    alert(
      "Form submitted successfully with current time: " + currentTimeString
    );
  };

  return (
    <>
      <Navbar />
      <Box maxWidth="400px" mx="auto" mt="4" rounded={"lg"} boxShadow={"lg"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              type="text"
              placeholder="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <FormErrorMessage>{""}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              type="password"
              placeholder="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <FormErrorMessage>{""}</FormErrorMessage>
          </FormControl>

          <Button type="submit">Submit</Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default Login;

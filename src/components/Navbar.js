import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React from "react";
import logo from "../portfolio-logo.svg";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="primary.300"
      boxShadow="sm"
    >
      <Box>
        <Image src={logo} alt="SUJAY GANDHAM" height={12} />
      </Box>
      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="primary.100"
          width="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        display={{ xs: show ? "block" : "none", sm: show ? "block" : "none", md: "flex" }}
        width={{ xs: "full", sm: "full", md: "auto" }}
        alignItems="flex-end"
        mt={{ base: 2 }}
      >
        <MenuItems>Work</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>About</MenuItems>
      </Box>
    </Flex>
  );
};

export default Navbar;

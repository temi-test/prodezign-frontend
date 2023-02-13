import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import useRedirect from "../../hooks/useRedirect";
import Logo from "../../images/logo.png";
import HeaderLink from "../navigation/HeaderLink";

function Header() {
  const redirect = useRedirect();
  const {confirmLogout} = useAuth();
  const { token, account, enrollments } = useSelector((state) => state.auth);

  const authAction = () => {
    if (account) {
      // logout
      console.log("account should logout");
      confirmLogout();
      return;
    }
    redirect("/init");
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      minH="50px"
      p="15px 50px"
      bg="#f5f5f5"
    >
      <Flex>
        <Image src={Logo} h="45px" w="50px" objectFit="contain" me="10px" />
        <Heading mt="0px" size="lg" fontWeight="500">
          Prodezign
        </Heading>
      </Flex>

      <Flex>
        <HeaderLink name="Home" link="/" />
        <HeaderLink name="Bootcamps" link="/bootcamps" />
        <HeaderLink name="Works" link="/works" />
        <HeaderLink name="About" link="/about" />

        <HeaderLink name="My Courses" link="/enrolled-bootcamps" />
      </Flex>

      <Button
        bg={account ? "red.500" : "blue.500"}
        color="white"
        size="lg"
        onClick={() => {
          authAction();
        }}
      >
        {account ? "Logout" : "Signin"}
      </Button>
    </Flex>
  );
}

export default Header;

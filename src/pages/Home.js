import React from "react";
import { Flex, Button, Text, Box } from "@chakra-ui/react";

function Home(props) {
  function openLogin() {
    window.open(
      "https://www.reddit.com/api/v1/authorize?client_id=rnyVZZYSU5qj1qWo34RpRg&response_type=code&state=yolo&redirect_uri=http://localhost:3000/login/callback&duration=permanent&scope=history,identity,submit,save",
      "_self"
    );
  }
  return (
    <Flex FlexDirection="column" fontFamily="Poppins" height="100%">
      <Flex FlexDirection="column" alignItems="center" flex={10}>
        <Button
          background="#ff4301"
          color="white"
          onClick={() => {
            openLogin();
          }}
          boxShadow="0px 0px 15px #ff4301"
        >
          Login With Reddit
        </Button>{" "}
      </Flex>
      <Flex flex={1} justifyContent="center">
      </Flex>
    </Flex>
  );
}
export default Home;

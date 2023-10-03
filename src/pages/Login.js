import React, {useEffect} from "react";
import {Flex, CircularProgress} from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
function LoginWithReddit({ location }) {
  let { search } = useLocation()
  useEffect(() => {
    const query = new URLSearchParams(search);
    axios.get(`http://localhost:3003/login_reddit?code=${query.get("code")}`);
  })

  return (
    <Flex>
      <CircularProgress isIndeterminate color="orange" />
    </Flex>
  );
}
export default LoginWithReddit;

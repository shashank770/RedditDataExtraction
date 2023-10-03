import React, {useEffect,useState} from "react";
import {Flex, CircularProgress} from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styles from './Login.module.css'
import PollSlider from "./Pollslider";
function LoginWithReddit({ location }) {
const [responseData, setResponseData] = useState(null);
  let { search } = useLocation()
  useEffect(() => {
    const query = new URLSearchParams(search);
    axios.get(`http://localhost:3003/login_reddit?code=${query.get("code")}`).then((response)=>{
      console.log(response)
      setResponseData(response.data)
    });
  })

  return (
    <div className={styles.containerbox}>
        <h2>Below is a list of subreddits you've upvoted. Please rate each subreddit based on how frequently you encounter hate speech within them</h2>
        <ul>
        { responseData?.map((item,index) => (
          <li key={index}>
            {item.data.subreddit}
            <PollSlider/> </li>
        ))}
      </ul>
      <button className={styles.button}>Submit</button>
    </div>
  );
}
export default LoginWithReddit;

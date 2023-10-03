import React from "react";
import { Button, Text, Box } from "@chakra-ui/react";
import styles from './Home.module.css'
import { Center } from "@chakra-ui/react";
function Home(props) {
  function openLogin() {
    window.open(
      "https://www.reddit.com/api/v1/authorize?client_id=rnyVZZYSU5qj1qWo34RpRg&response_type=code&state=yolo&redirect_uri=http://localhost:3000/login/callback&duration=permanent&scope=history,identity,submit,save",
      "_self"
    );
  }
  return (
    // <Flex FlexDirection="column" fontFamily="Poppins" height="100%">
    //   <Flex FlexDirection="column" alignItems="center" flex={10}>
    <div>
        <h1 className={styles.heading}>Hate Speech Detection Survey</h1>
        <div>
          <p className={styles.paragraph}>
We invite you to participate in our "Hate Speech Detection Survey." This survey aims to collect valuable data to improve the accuracy and effectiveness of our hate speech detection model. Hate speech poses a significant challenge in online communities and social media platforms, and we are committed to developing tools that can help combat it.
By taking part in this survey, you will have the opportunity to contribute to the development of technology that can promote a safer and more inclusive online environment. Your responses will help us understand the nuances and patterns of hate speech, allowing us to enhance our model's ability to identify and address harmful content.
Your privacy is our top priority, thus we do not store your credentials. We do not collect any personally identifiable information. The survey consists of questions related to your experiences with online content and hate speech. Your honest and thoughtful responses are crucial in helping us refine our hate speech detection algorithms. Together, we can work towards a more respectful and tolerant online community. Please click the button below to log in using your Reddit account. You will be asked some basic questions related to your favorite subreddits.
          </p>
        </div>
        <Center>
        <Button
          background="#ff4301"
          color="white"
          onClick={() => {
            openLogin();
          }}
          boxShadow="0px 0px 15px #ff4301"
        >
          Login With Reddit
        </Button>
        {" "}
        </Center>
        </div>
      // </Flex>
      // <Flex flex={1} justifyContent="center">
      // </Flex>
    // </Flex>
  );
}
export default Home;

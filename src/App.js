import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Button } from "@chakra-ui/react";
import Home from "./pages/Home";
import LoginWithReddit from "./pages/Login";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login/callback" element={<LoginWithReddit/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

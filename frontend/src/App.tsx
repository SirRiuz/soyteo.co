import { JSX, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Projects from "./screens/Projects";
import Cursor from "./components/Cursor";
import Linkedin from "./screens/Linkedin";
import Github from "./screens/Github";
import { Container } from "@mui/material";

function App(): JSX.Element {
  useEffect(
    () =>
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      ),
    []
  );

  return (
    <BrowserRouter>
      <Container>
        <Cursor />
        <Background />
        <NavBar />
        <Routes>
          <Route path="/index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/linkedin" element={<Linkedin />} />
          <Route path="/github" element={<Github />} />
          <Route path="/in" element={<Linkedin />} />
          <Route path="/gh" element={<Github />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

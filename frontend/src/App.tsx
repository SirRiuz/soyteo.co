import { JSX, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Projects from "./screens/Projects";
import Cursor from "./components/Cursor";
import Linkedin from "./screens/Linkedin";
import Github from "./screens/Github";
import CV from "./screens/CV";
import { Container } from "@mui/material";

function ConditionalCursor(): JSX.Element | null {
  const { pathname } = useLocation();
  if (pathname === "/cv") return null;
  return <Cursor />;
}

function App(): JSX.Element {
  useEffect(
    () =>
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault(),
      ),
    [],
  );

  return (
    <BrowserRouter>
      <Container>
        <ConditionalCursor />
        <Background />
        <NavBar />
        <Routes>
          <Route path="/index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />

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

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

const DEFAULT_META = {
  title:
    "Mateo Jiménez — Full-Stack Software Engineer | React, TypeScript, Python",
  description:
    "Mateo Jiménez (SirRiuz) — full-stack software engineer building scalable, production-grade web products with React, TypeScript, Node.js and Python. Creator of Thiup, Telephone API and Vivaldi Math Solver. Contact: hi@soyteo.co",
  canonical: "https://soyteo.co/",
};

const ROUTE_META: Record<
  string,
  { title: string; description: string; canonical: string }
> = {
  "/": DEFAULT_META,
  "/home": DEFAULT_META,
  "/index.html": DEFAULT_META,
  "/projects": {
    title: "Projects — Mateo Jiménez | Thiup, Telephone API, Vivaldi",
    description:
      "Open-source projects by Mateo Jiménez: Thiup (anonymous social network), Telephone API (phone number intelligence on Twilio), Vivaldi Math Solver and Track.",
    canonical: "https://soyteo.co/projects",
  },
  "/cv": {
    title: "CV / Résumé — Mateo Jiménez, Full-Stack Software Engineer",
    description:
      "Résumé of Mateo Jiménez, full-stack software engineer specializing in React, TypeScript, Node.js and Python. Open to new opportunities.",
    canonical: "https://soyteo.co/cv",
  },
};

// Keeps title, meta description and canonical in sync with the route so
// each page is indexed with its own snippet instead of a shared one
function RouteMeta(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? DEFAULT_META;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", meta.canonical);
  }, [pathname]);

  return null;
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
        <RouteMeta />
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

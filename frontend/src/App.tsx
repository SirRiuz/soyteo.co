import { JSX, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
  if (pathname.endsWith("/cv")) return null;
  return <Cursor />;
}

const DEFAULT_META = {
  title: "Mateo Jiménez — Full-Stack Software Engineer",
  description:
    "Mateo Jiménez (SirRiuz), full-stack software engineer building scalable web products with React, TypeScript and Python. Creator of Thiup. hi@soyteo.co",
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
    title: "Projects — Mateo Jiménez | Thiup, Telephone API",
    description:
      "Open-source projects by Mateo Jiménez: Thiup, Telephone API, Vivaldi Math Solver and Track — built with React, TypeScript and Python.",
    canonical: "https://soyteo.co/projects",
  },
  "/en/cv": {
    title: "CV / Résumé — Mateo Jiménez, Software Engineer",
    description:
      "Résumé of Mateo Jiménez, full-stack software engineer (React, TypeScript, Node.js, Python). Open to new opportunities.",
    canonical: "https://soyteo.co/en/cv",
  },
  "/es/cv": {
    title: "CV / Hoja de vida — Mateo Jiménez, Ingeniero de Software",
    description:
      "Hoja de vida de Mateo Jiménez, ingeniero de software full-stack (React, TypeScript, Node.js, Python). Abierto a nuevas oportunidades.",
    canonical: "https://soyteo.co/es/cv",
  },
};

// "/cv" redirects to the English CV; reuse its meta to avoid a
// default-meta flash during the client-side redirect
ROUTE_META["/cv"] = ROUTE_META["/en/cv"];

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
          <Route path="/cv" element={<Navigate to="/en/cv" replace />} />
          <Route path="/en/cv" element={<CV lang="en" />} />
          <Route path="/es/cv" element={<CV lang="es" />} />

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

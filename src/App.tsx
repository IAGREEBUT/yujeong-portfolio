import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/sections/Home/Intro/Intro";
import TeckStack from "@/sections/Home/TeckStack/TeckStack";
import Projects from "@/sections/Home/Projects/Projects";
import Contact from "@/sections/Home/Contact/Contact";
import Experience from "@/sections/Home/Experience/Experience";
import ReactPocProject from "@/pages/projects-detail/react-poc";

import "./App.css";

function Home() {
  return (
    <>
      <Intro />
      <TeckStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        id="top"
        className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]"
      >
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/project-detail/react-poc"
              element={<ReactPocProject />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

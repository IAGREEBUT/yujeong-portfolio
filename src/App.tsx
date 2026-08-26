import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/sections/Intro/Intro";
import TeckStack from "./sections/TeckStack/TeckStack";
import "./App.css";
import Experience from "./sections/Experience/Experience";

function App() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]"
    >
      <Header />

      <main className="flex-1">
        <Intro />
        <TeckStack />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;

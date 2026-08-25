import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/sections/Intro/Intro";
import "./App.css";

function App() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]"
    >
      <Header />

      <main className="flex-1">
        <Intro />
      </main>

      <Footer />
    </div>
  );
}

export default App;

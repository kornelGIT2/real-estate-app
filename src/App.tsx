import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="flex flex-col items-center h-screen   ">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;

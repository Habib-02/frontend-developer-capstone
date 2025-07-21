import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Helor";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;

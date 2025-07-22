import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import Hero from "./components/hero/Helor";
import Menu from "./components/menu/Menu";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Menu />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

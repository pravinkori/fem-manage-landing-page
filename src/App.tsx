import Feature from "./components/Features/Feature";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Testimonials/Carousel";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import "./css/App.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <Carousel />
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

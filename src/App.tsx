import Feature from "./components/Features/Feature";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Testimonials/Carousel";
import CTA from "./components/CTA/CTA";
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
    </>
  );
}

export default App;

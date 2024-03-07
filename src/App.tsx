import Feature from "./components/Features/Feature";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./css/App.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
      </main>
    </>
  );
}

export default App;

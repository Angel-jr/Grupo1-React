import "./components/carousel/style/Carousel.css";
import Footer from "./components/Footer";
import Carousel from './components/carousel/Carousel';
import NavBar from "./components/Header/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Imagen Con Boton</h1>
      <h1>Tarjetas</h1>
      <h1>Info</h1>
      <h1>About Us</h1>
      <h1>Call to action</h1>
      <h1>Buy Now</h1>
      <Carousel />
      <h1>Redes Sociales</h1>
      <Footer />
    </div>
  );
}

export default App;

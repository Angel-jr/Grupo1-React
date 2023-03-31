import './styleNav.css'
import React,{useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return(
    // Las imagenes no se me estan mostrando
      <nav className='NavBar'>
        <img src="./imge/Logo.png" alt="Logo" className='logo'/>
          <ul className= {`List ${isOpen && "open"}`} >
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="/">Nuestra carta</a></li>
            <li><a href="/">Galeria</a></li>
            <li><a href="/">Pedidos</a></li>
            <li><a href="/">Reservas</a></li>
          </ul>
          <img src="./image/carrito.png" alt="Carrito" className='carrito'/>
          <div className={`menu ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* {`List ${isOpen && "open"}`}  onClick={ () => setIsOpen(!isOpen)} */}
      </nav>
  )
}

export default Navbar
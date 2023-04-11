import logo from '../assets/img/logo.jpg';

export default function Footer() {
  return ( 
    <footer>
      <img src={logo} alt="logo" className="footer-img"/>
      
      <div className='footer-menu'>
      <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="/">Nuestra carta</a></li>
            <li><a href="/">Galeria</a></li>
            <li><a href="/">Pedidos</a></li>
            <li><a href="/">Reservas</a></li>
      </ul>
      </div>

      <div className="footer-from">
          <h2>FORMULARIO DE CONTACTO</h2>
          <form>
            <p>
              <input className='controls' type="text" id="name-input" name="name" placeholder="Ingresa tu nombre" required />
            </p>
            <p>
              <input className='controls' type="email" id="email-input" name="email" placeholder="Ingresa tu correo electrónico" required />
            </p>
            <p>
              <textarea className='controls' id="message-input" name="message" placeholder="Escribe tu mensaje aquí" required></textarea>
            </p>
            <button className='botons' type="submit">Enviar</button>
          </form>
        </div>
    </footer>
  );
}

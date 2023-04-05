import logo from '../assets/img/logo.jpg';

export default function Footer() {
  return (
    <footer>
      <div className='footer__box'>
      <img src={logo} alt="logo" className="footer-img"/>
      <ul className="footer__menu">
        <li>INICIO</li>
        <li>NOSOTROS</li>
        <li>NUESTRA CARTA</li>
        <li>GALERIA</li>
        <li>PEDIDOS</li>
        <li>RESERVAS</li>
      </ul>
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
        </div>
    </footer>
  );
}


import './styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content grid">
          <div className="footer__content-item footer__item-1">
              <h4 className="footer__item-title">Turing Inteligencia <br /> Artificial</h4>
              <div className="footer__item-text line-text">
                <p>Av. Insurgentes 601</p>
                <p>Col. Nápoles, Benito Juárez</p>
                <p>Ciudad de México, México</p>
              </div>

              <div className="footer__item-text line-text">
                <span className="footer__item-span">Teléfono de contacto:</span>
                <p>+52 (722) 936-96-65</p>
                <span className="footer__item-span">Correo electrónico:</span>
                <p>contacto@turing-ia.com</p>
              </div>
          </div>
          <div className="footer__content-item footer__item-2">
              <h4 className="footer__item-title">Nuestros servicios</h4>
              <ul className="footer__ul">
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Implementación de Proyectos (Business Analyst)</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Balanced Scorecard</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Workshop (Blue Print)</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Capacitación</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Venta de Software</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Venta de Hardware</a>
                </li>
                <li className="footer__ul-li">
                    <a className="footer__ul-a" href="">Desarrollo de Aplicaciones</a>
                </li>
              </ul>
          </div>

          <div className="footer__content-item footer__item-3">
              <h4 className="footer__item-title">Inscríbete a nuestro newsletter</h4>
              <div className="footer__item-form">
                <input className="footer__item-input" type="text" />
                <button className="footer__item-button">Suscribir</button>
              </div>
          </div>

          <div className="footer__content-item footer__item-4">
            <h4 className="footer__item-title">Mapa de sitio</h4>
            <ul className="footer__ul footer__nav">
              <li className="footer__ul-li footer__nav-li"><a className="footer__nav-a footer__ul-a" href="">Inicio</a></li>
              <li className="footer__ul-li footer__nav-li"><a className="footer__nav-a footer__ul-a" href="">Nosotros</a></li>
              <li className="footer__ul-li footer__nav-li"><a className="footer__nav-a footer__ul-a" href="">Servicios</a></li>
              <li className="footer__ul-li footer__nav-li"><a className="footer__nav-a footer__ul-a" href="">Tableau</a></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

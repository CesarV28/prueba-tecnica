import './about.css'

export const About = () => {
  return (
    <section className="section about grid">
      <div className="about__img">
          <ul className="about__ul grid">
            <li className="about__ul-li">
              +<span className="li__span">150</span> clientes
            </li>
            <li className="about__ul-li">+<span className="li__span">150</span> clientes</li>
            <li className="about__ul-li">+<span className="li__span">100</span> proyectos</li>
            <li className="about__ul-li">+<span className="li__span">100</span> sectores industriales</li>
          </ul>
      </div>
      <article className="about__content">
          <h3 className="about__content-title">BUSSINES INTELIGENCE</h3>
          <span className="about__content-subTitle">Ayudamos a la toma de decisiones en todos los niveles de la empresa:</span>
          <p className="about__content-text line-text">
          Construimos e implementamos las soluciones que se ajusta a la medida de los retos actuales y futuros, de las organizaciones lideres en el mercado.
          Nuestro objetivo es transformar tus datos en oportunidades de negocio. ayudamos a la toma de decisiones en todos los niveles de la empresa.
          Con nuestras soluciones seras capaz de identificar tendencias de mercado, potenciar los recursos de la empresa, y crear planes de acción anticipando errores y amenazas para tus estrategias corporativas. 
          </p>
      </article>
    </section>
  )
}

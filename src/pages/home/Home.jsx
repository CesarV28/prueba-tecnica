

import { Carousel } from '../../components/Carousel'
import './home.css'

export const Home = () => {
  return (
    <main>

        <div className="home__do">
            <h2 className="do__title">QUE REALIZAMOS</h2>
            <span className="do__subTitle">Contribuimos con su empresa para mejorar la toma de decisiones a través de sus datos. </span>
            <div>
                <button className='button-seconday'>Leer más</button>
            </div>
        </div>     

        <section className="home__info grid">
          <div className="info__img-left">
              <div className="img-left">

              </div>
          </div>
          <div className="info__content">
            <h3 className="info__content-title">LA MANERA IDEAL PARA MANEJAR TUS DATOS</h3>
            <p className="info__content-text line-text">Somos el socio estratégico que necesitas para potenciar los datos de tu organización.
                Contamos con más de 15 años de experiencia brindando soluciones innovadoras, adaptadas a las necesidades de nuestros clientes, en más de 10 industrias y diferentes áreas funcionales.
            </p>
          </div>
          <div className="info__img-right">
              <div className="img-right">

              </div>
          </div>
        </section>

        <div className="home__technologies ">
          <h3 className="technologies__title">LA MANERA IDEAL PARA MANEJAR TUS DATOS</h3>
          <div className="technologies__content grid">
            <div className="technologies__content-item">
              <img src="https://turing-ia.com/assets/img/tecnoly-tableau.png" alt="" />
            </div>
            <div className="technologies__content-item">
              <img src="https://turing-ia.com/assets/img/salesforce%20(2).jpg" alt="" />
            </div>
            <div className="technologies__content-item">
              <img src="https://turing-ia.com/assets/img/pmi2.png" alt="" />
            </div>
            <div className="technologies__content-item">
              <img src="https://turing-ia.com/assets/img/scrum.png" alt="" />
            </div>
          </div>
        </div>
        
        <Carousel/>

    </main>
  )
}

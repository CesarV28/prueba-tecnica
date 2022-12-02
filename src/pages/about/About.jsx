import { Content } from "../../components/Content"
import { AboutItem } from "./components/AboutItem"

import './about.css'

export const About = () => {
  return (
    <main>
       <Content />
        <section className="section methodologies">
          <article className="methodologies__article">
            <div className="article__content">
              <h2 className="article__content-title">nuestras metodologías</h2>
              <p className="article__content-text line-text">
                Nuestros expertos están comprometidos en desarrollar proyectos respaldados por metodologías ágiles e innovadoras, que aseguran el éxito de nuestras soluciones de analítica. 
              </p>
            </div>
          </article>
          <div className="methodologies__card grid">
            <div className="card">
              <div className="card__img"></div>
            </div>
            <div className="card">
              <div className="card__img"></div>
            </div>
            <div className="card">
              <div className="card__img"></div>
            </div>
            <div className="card">
              <div className="card__img"></div>
            </div>
            <div className="card">
              <div className="card__img"></div>
            </div>
          </div>
        </section>
            
        <AboutItem/>   
    </main>
  )
}

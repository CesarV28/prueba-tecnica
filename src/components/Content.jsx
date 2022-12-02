
import './styles/content.css'

export const Content = () => {
  return (
    <section className="section__container">
      <div className="content__img">
        <div className='content__img-img'></div>
      </div>
      <article className="content">
          <h3 className="content__title">¿Quienes somos?</h3>
          <span className="content__subTitle">Turing IA, tu mejor opcion</span>
          <p className="content__text line-text">
            Somos una Empresa de Analítica e Inteligencia de Negocios en México con presencia internacional, conformada por especialistas en proyectos de Business Analytics. Contamos con mas de 15 años de experiencia brindando soluciones innovadoras en más de 10 industrias y diferentes áreas funcionales.
            Contamos con los mejores Especialistas en Análisis Descriptivos, Predictivos y Prescriptivos, equipados con las certificaciones más importantes en el desarrollo de Análisis de Datos mediante Knowledge Discovery in Database (KDD) 
          </p>
      </article>
    </section>
  )
}

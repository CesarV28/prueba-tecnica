
import './home_form.css'

export const HomeForm = () => {
  return (
    <div className="form__container">

        <div className="form__aside">

        </div>
        <form className="form" action="">
            <h4 className="form__title">Déjanos tus datos y nosotros nos pondremos en contacto.</h4>
            <span className="form__span">Envíanos tus datos</span>
            <div className="form__input-container shadow">
                <input className="input__form" type="text" placeholder="Nombre" />
                <input className="input__form" type="text" placeholder="Correo" />
                <input className="input__form" type="text" placeholder="Numero de telefono" />
                <input className="input__form" type="text" placeholder="Puesto (opcional)" />
                <input className="input__form" type="text" placeholder="Empresa (opcional)" />
                <textarea className="textarea__form" id="" cols="30" rows="10" placeholder="Escribe tu mensaje (opcional)" ></textarea>
                <button className="button form__button">Enviar</button>
            </div>
        </form>
    </div>
  )
}

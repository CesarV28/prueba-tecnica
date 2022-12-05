import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

import './styles/form.css'

export const Form = () => {
  const {isLoading, hasError, sendData} = useFetch()
  const { onInputChange, formState, onResetForm } = useForm({
      name: '',
      email: '',
      phoneNumber: '',
      job: '',
      company: '',
      message: ''
  });

  const { 
        name,
        email,
        phoneNumber,
        job,
        company,
        message
    } = formState;

    const handleSubmit = (e) => {
      e.preventDefault()
      sendData(formState)
      if(hasError) onResetForm();
    }

  return (
    <div className="section">
      <h3 className="form__title">Pongamonos en contacto</h3>
      <p className="form__span">Envíanos tus datos</p>
      { hasError && <span className="form__span-error">¡Up!, parece que hubo un error</span>}

      <form className="form form__input-container shadow" onSubmit={handleSubmit} action="">
            
          <input 
            onChange={ onInputChange } 
            value={name} 
            name="name" 
            required={hasError}
            className={`input__form input__form-error`} 
            type="text" 
            placeholder="Nombre" 
          />
          <input 
            onChange={ onInputChange } 
            value={email} 
            name="email" 
            required={hasError}
            className={`input__form input__form-error`} 
            type="text" 
            placeholder="Correo" 
          />
          <input 
            onChange={ onInputChange } 
            value={phoneNumber} 
            name="phoneNumber" 
            required={hasError}
            className={`input__form input__form-error`} 
            type="text" 
            placeholder="Numero de telefono" 
          />
          <input 
            onChange={ onInputChange } 
            value={job} 
            name="job" 
            className={`input__form input__form-error`} 
            type="text" 
            placeholder="Puesto (opcional)" 
          />
          <input 
            onChange={ onInputChange } 
            value={company} 
            name="company" 
            className={`input__form input__form-error`} 
            type="text" 
            placeholder="Empresa (opcional)" 
          />
          <textarea 
            onChange={ onInputChange } 
            value={message} 
            name="message" 
            className={`textarea__form input__form-error`}
            cols="30" rows="10" 
            placeholder="Escribe tu mensaje (opcional)" 
          >
              {message}
            </textarea>
          <button type="submit" disabled={isLoading} className={`button form__button ${isLoading && 'loading'}`}>Enviar</button>
         
        </form>

    </div>
  )
}

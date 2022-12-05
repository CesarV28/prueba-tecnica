import { useState } from "react";


export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [errors, setErrors] = useState({});

  const getErrors = () => {
    let newErrors = {};
    Object.entries(formState).forEach(([key, value]) => {
        
      if (value === '') {
        // console.log({key, value})
        newErrors = { ...newErrors, [key]: `The ${key} is required` }
      } 
    });

    if(!newErrors) setErrors({})
    setErrors(newErrors);

  };

    const onInputChange = ({ target }) => {

        const { value, name } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        errors,
        onResetForm,
        onInputChange,
        getErrors
    };
}
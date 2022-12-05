import { useState } from "react";

const URL = 'http://localhost:8080/api/contact/';

export const useFetch = () => {
  
    const [state, setState] = useState({
        data: null,
        isLoading: false,
        hasError: false,
    });

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true
        })

        try {
            const resp = await fetch(URL);
            const data = await resp.json();
            console.log(data.contacts)
            setState({
                data,
                isLoading:false,
                hasError: null,
            });
        } catch (error) {
            setState({
                ...state,
                hasError: true,
            });
        }
    }


    const sendData = async(data) => {

        setState({
            ...state,
            isLoading: true
        })

        try {
            const dataFetch = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            
            if( dataFetch.status === 400 ){
                setState({
                    ...state,
                    isLoading:false,
                    hasError: true,
                });
            }else{
                setState({
                    ...state,
                    isLoading:false,
                    hasError: false,
                });
            }

            
        } catch (error) {
            setState({
                ...state,
                hasError: true,
            });
        }

    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,

        sendData,
        getFetch
    };
}
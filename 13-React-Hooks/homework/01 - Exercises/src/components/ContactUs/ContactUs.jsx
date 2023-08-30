import React from "react";
import { useDispatch } from 'react-redux'
import {enviarForm} from '../../redux/actions/actions'


// Debería invocarse el hook dispatch para poder despachar la action 'enviarFormulario'

const ContactUs = () => {

  const dispatch = useDispatch();
  
  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  function submitHandler(){
    dispatch(enviarForm(form));
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }


  function inputHandler(event) {
    setForm({
      nombre: event,
      email: event,
      asunto: event,
      mensaje: event,
    })
  }


  return (
    <div>
      <form onSubmit={submitHandler} className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={inputHandler} name="nombre" />
        <label htmlFor="email">Email: </label>
        <input onChange={inputHandler} name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={inputHandler} name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={inputHandler} name="mensaje" />
        <button type="submit" >Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;

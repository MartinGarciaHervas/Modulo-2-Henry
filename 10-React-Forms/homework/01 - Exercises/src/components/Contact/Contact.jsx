import React from 'react'
import { useState } from 'react';
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre'
  }

  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico'
  }

  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje'
  }

  return errors
}

export default function Contact() {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })

    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        message: '',
      })
      setErrors({
        name: '',
        email: '',
        message: '',
      })
    } else {
      alert('Debe llenar todos los campos')
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} name='name' placeholder='Escribe tu nombre...' type='text' />
        {errors.name ? <p className='danger' >{errors.name}</p> : null}
        <label>Correo Electrónico:</label>
        <input className={errors.email && 'warning'} onChange={handleChange} value={inputs.email} name='email' placeholder='Escribe tu email...' type='text' />
        {errors.email ? <p className='danger' >{errors.email}</p> : null}
        <label>Mensaje:</label>
        <textarea className={errors.message && 'warning'} onChange={handleChange} value={inputs.message} name='message' placeholder='Escribe tu mensaje...' type='text' />
        {errors.message ? <p className='danger' >{errors.message}</p> : null}
        <button type='submit' >Enviar</button>
      </form>
    </div>)
}

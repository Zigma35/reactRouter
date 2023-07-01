import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
  return (
    <div>
        <br />
    <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
    <br />
    <div className='formContainer'>
    <Form> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control type="email" placeholder="Tu direccion de correo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="danger">¡Enviar!</Button>{' '}
    </div>

    </div>
  )
}

export default Contacto;
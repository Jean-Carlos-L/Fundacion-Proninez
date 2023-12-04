import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./index.css";
import axios from 'axios';
import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        email: "",
        contrasenia: ""
    });

    const handleHash = (text) => {
        const hash = CryptoJS.MD5(text).toString();
        return hash
    };

  const handleLogin = async (e) => {
    try {
    e.preventDefault();
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/login`;
        const contraseniaEncriptada = handleHash(credenciales.contrasenia);
        console.log(contraseniaEncriptada)
        const response = await axios.post(url, { ...credenciales, contrasenia: contraseniaEncriptada});
        navigate("/");
    } catch (error) {
       Swal.fire({
        icon: "error",
        title: error.response.data.msg
       })
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleLogin}>
            <div className='text-center'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5hKXWC5qWFV4IBNf6pCvNbSYXPaP-Q0xkj4qjqUleod0-m3_nYmBWpg0gEYL4FhH_vc&usqp=CAU" // Replace with your image URL
                    alt="Login Image"
                    className="img-fluid mx-auto"
                    width="300"
                    height="300"
                    />
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={({target}) => setCredenciales({...credenciales, email: target.value})} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  onChange={({target}) => setCredenciales({...credenciales, contrasenia: target.value})} required  />
            </Form.Group>

            <Button className="btn btn-primary-2 mb-3" type="submit">
              Log In
            </Button>

            
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

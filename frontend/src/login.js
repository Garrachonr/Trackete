import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Login() {


    return (



        <div class="login">

            <h2><img src={process.env.PUBLIC_URL + "/images/Logo.png"} ></img></h2>

            <div class="container" id="container">

                    <br></br>
                

                    <h2 align="center">Iniciar Sesión</h2>
                    
                    <form>
                        <label>
                            <input type = "text" name ="name" placeholder='Usuario o Email'/>
                        </label>
                            

                    </form>

 


                    <form>
                        <label>
                            <input type="text" name="name" placeholder='Contraseña' />
                        </label>
                    </form>

                    <h2>
                        <Button align="center">INICIAR SESIÓN</Button>   
                    </h2>

                    <br></br>
                    <br></br>
                    <br></br>


                    <h2>¿Todavía no te has registrado?</h2>
                    <h5>Date de alta en nuestro servicio</h5>
                    <h2>
                        <Button align="center">Registrarse</Button>
                    </h2>
                    
 



               
  
            </div>
        </div>    

    );
}

export default Login;
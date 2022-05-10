import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import {CryptoJS} from 'crypto-js';


function Registro() {

    const EMAIL = "";
    const PASSWORD = "";
    const NAME ="";

    const [email, setEmail]= useState(EMAIL);
    const [password, setPassword]= useState(PASSWORD);
    const [name, setName]= useState(NAME);



    async function register(){
        var CryptoJS=require("crypto-js");
        var result = CryptoJS.AES.encrypt(JSON.stringify(password), 'KeyISST').toString();
        var log = {"name":name, "email": email, "pass": result, "pedidos": "", "compañias": "" }
        await fetch('/ships', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        });
        // setPassword(result);
        setEmail("");
        setPassword("");
        setName("");
    }



    return (

        <div class="login">

            <h2><img src={process.env.PUBLIC_URL + "/images/Logo.png"} ></img></h2>

            <div class="container" id="container">

                    <br></br>
                

                    <h2 align="center">Registrarse</h2>
                                        
                    <form>
                        <label>
                            <input type = "text" name ="name" placeholder='Nombre' value={name} onChange={e=>setName(e.target.value)}/>
                        </label>
                            

                    </form>

                    <form>
                        <label>
                            <input type = "text" name ="name" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                        </label>
                            

                    </form>

 


                    <form>
                        <label>
                            <input type="password" name="name" placeholder='Contraseña' value={password} onChange={e=>setPassword(e.target.value)}/>
                        </label>
                    </form>

                    <h2>
                        <button type='button' onClick={()=>register()} align="center"> Regístrate</button>   
                    </h2>

                    <br></br>
                    <br></br>
                    <br></br>


                    <h2>¿Ya tienes cuenta?</h2>
                    <h5>Inicia sesión con nosotros</h5>
                    <h2>
                    <button type='button'  align="center" > <Link to="/login" > Iniciar sesión</Link></button>
                    </h2>
            </div>
        </div>    

    );
}

export default Registro;
import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link, BrowserRouter, Route, Switch , useHistory} from 'react-router-dom';
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap';
import {CryptoJS} from 'crypto-js';
import { propTypes } from 'react-bootstrap/esm/Image';
import './App.js';
import MuiAlert from "@material-ui/lab/Alert";


function Login() {

    const PASSWORD = "";
    const EMAIL ="";

    const [email, setEmail]= useState(EMAIL);
    const [password, setPassword]= useState(PASSWORD);

    const history = useHistory();
    
        async function comprobar(e){
            e.preventDefault();
            const text = email;
            // console.log(text);
            const response = await fetch("/ships/" + text);
            const myjson = await response.json();
            var encryptedPass = myjson.pass;
            // console.log(encryptedPass);
            var CryptoJS=require("crypto-js");
            var bytes = CryptoJS.AES.decrypt(encryptedPass, 'KeyISST');
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if(password===decryptedData){
                setEmail("CORRECTO");
                setPassword("PASSWORD");
                //this.props.history.push("/ships/email/paco@gmail.com" )
                //ir a /home/email
                // return fetch('/home');
                history.push("/home",{email:text});
                setEmail("");
                setPassword("");
            }
            else{
                setEmail("INCORRECTO");
                setPassword("PASSWORD INCORRECTA");
                //Mensaje de error

            }
        }
        function Alert(props){
            return <MuiAlert elevation={6} variant ="filled" {...props}/>

        }
 




    return (



        <div class="login">

            <h2><img src={process.env.PUBLIC_URL + "/images/Logo.png"} ></img></h2>

            <div class="container" id="container">

                    <br></br>
                

                    <h2 align="center">Iniciar Sesión</h2>
                    
                    <form  onSubmit={comprobar}>
                        <label>
                            <input type = "text" name ="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
                        </label>
                            


 



                        <label>
                            <input type="password" name="name" placeholder='Contraseña' value={password} onChange={e=>setPassword(e.target.value)} />
                        </label>


                    <h2>
                        <button type='sumbit'  value={"Iniciar sesión"}></button>
                    </h2>
                  
                    </form>


                    <br></br>
                    <br></br>
                    <br></br>


                    <h2>¿Todavía no te has registrado?</h2>
                    <h5>Date de alta en nuestro servicio</h5>
                    <h2>
                        <ButtonGroup>
                        <button type='button' align="center" > <Link to="/registro" > Regístrate </Link></button>
                        </ButtonGroup>
                    </h2>
                    
 

                   


               
  
            </div>
        </div>    

    );
}

export default Login;
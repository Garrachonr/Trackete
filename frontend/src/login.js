import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link, BrowserRouter, Route, Switch , useHistory} from 'react-router-dom';
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap';
import {CryptoJS} from 'crypto-js';
import { propTypes } from 'react-bootstrap/esm/Image';
import './App.js';
import swal from "sweetalert";


function Login() {

    const PASSWORD = "";
    const EMAIL ="";

    const [email, setEmail]= useState(EMAIL);
    const [password, setPassword]= useState(PASSWORD);

    const history = useHistory();
    


        async function comprobar(e){

            
            e.preventDefault();
            const text = email;
            const text2 = password;

            //Comrpobar que se ha escrito el usuario y contraseña
            if(text == "" || text2 == ""){
                //Mensaje de error
                var alerta = swal({title: "Introduzca un usuario y contraseña", text:"Por favor vuelva a intentarlo", icon: "warning"});
                function alert(){
                    return alerta;
                };
                alert();
                setEmail("");
                setPassword("");
            }


            // console.log(text);
            const response = await fetch("/ships/" + text);

            //Si la respuesta de la bdd no es buena, mensaje de error
            if(!response.ok){
                var alerta = swal({title: "Usuario o contraseña incorectos", text:"Por favor vuelva a intentarlo" , icon: "warning"});
                function alert(){
                    return alerta;
                };
                alert();
                setEmail("");
                setPassword("");
                //Mensaje de error

            }
            //si la respuesta es buena, recuperamos el JSON
            const myjson = await response.json();
            //console.log(myjson.value);

                var encryptedPass = myjson.pass;
                var text3 = myjson.name;
                // console.log(encryptedPass);
                var CryptoJS=require("crypto-js");
                var bytes = CryptoJS.AES.decrypt(encryptedPass, 'KeyISST');
                var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                if(password===decryptedData){

                    var alerta = swal({title: "Login correcto", text:"Bienvenido", timer:"500"});
                    function alert(){
                        return alerta;
                    };
                    alert();
                    history.push("/home",{email:email});
                    //history.push("/home",{name:text3});
                }
                else{ 
                    var alerta = swal({title: "Usuario o contraseña incorectos", text:"Por favor vuelva a intentarlo", icon: "warning"});
                    function alert(){
                        return alerta;
                    };
                    alert();
                    setEmail("");
                    setPassword("");
                    //Mensaje de error
                };
            

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
                        <button type='sumbit button'  value={"Iniciar sesión"}> Iniciar sesion</button>
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
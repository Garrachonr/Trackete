import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Overview from "./parcelList/Overview";
import Add from "./parcelList/Add";

function Home() {

    const PARCEL_ARRAY = [];
    const SHIP_NUMBER = "";
    const COMPANY = "";
    const NUMBER_ARRAY = [];
    const COMPANY_ARRAY = [];

    const [parcel_array, setParcelArray] = useState (PARCEL_ARRAY);
    const [ship_number, setShipNumber] = useState(SHIP_NUMBER);
    const [company, setCompany] = useState (COMPANY);
    const [number_array, setNumberArray] = useState (NUMBER_ARRAY);
    const [company_array, setCompanyArray] = useState(COMPANY_ARRAY);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = "Home";
        
        // Database Acesss
        async function fetchData(){
            const response = await fetch("/ships/email/paco@gmail.com");
            const myjson = await response.json();
            var data = []; 
            data = myjson.map((parcel, i) => parcel.pedido);
            setNumberArray(data);
            data = myjson.map((parcel, i) => parcel.company);
            setCompanyArray(data);
        }
        fetchData();
    }, []);

    function cargar(){
        var array = parcel_array;
        number_array.map((parcel, i) => {
            var shipment = {"shipnumber" : parcel, "company" : company_array[i]};
            console.log(shipment);
            array = [...array, shipment];
        })
        setParcelArray(array);
    }

    async function guardar(){
        
        var log = {"name":"melon","email": "paco@gmail.com", "pass": "...", "company": company, 
                        "pedido": ship_number, "status": "...","address":"..."};
        await fetch('/ships', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        });
    }

    function handleShipNumber(a){
        setShipNumber(a);
    }

    function handleCompany(a){
        //setCompany(a);
    }

    async function uploadParcel(){
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'aftership-api-key': '612c49aa-28f8-4543-b7d9-1ea47b7f1510'
            },
            body: JSON.stringify({tracking: {tracking_number: ship_number}})
        };
            
        const response = await fetch('https://api.aftership.com/v4/trackings', options);
        const myjson = await response.json();
        setCompany(myjson.data.tracking.slug);
    }

    function saveParcel(){
        var shipment = {"shipnumber" : ship_number, "company" : company};
        var array = [...parcel_array, shipment];
        guardar();
        setParcelArray(array);
        setShipNumber("");
        setCompany("");
    }

    return (
        <div class="aside">

            <br></br>
            <br></br>
            <br></br>

            <img src={process.env.PUBLIC_URL + "/images/Logo.png"} height="150" widht="150" alt="Image" align = "center"></img>

            <div class="row">
                <Button class="ghost">Pedidos</Button>
                <Button>Cerrar sesion</Button>
                
            </div>
   
            <br></br>
            <br></br>

            <div class="row">
                <p>paco@gmail.com</p>
                <Button onClick={() => cargar()}>Cargar</Button>
            </div>

            <br></br>
            <br></br>

            <Add ship_number={ship_number} company={company} handleShipNumber={a => handleShipNumber(a)} 
                handleCompany={a => handleCompany(a)} clickSearch={() => uploadParcel()} clickSave={()=> saveParcel()}/>

            <br></br>

            <div class="col-12  mainPagecontainer ">
                <h2 class="blog-post-title">Pedidos</h2>

                <div class="aside">
                    <table>
                    {parcel_array.map((parcel, i) => {return (<Overview index = {i} number={parcel.shipnumber} 
                        company={parcel.company}/>)})}
                    </table>
                </div>   
            </div>

            <br></br>
            <br></br>

            <img src={process.env.PUBLIC_URL + "/images/LogoSinTexto.png"} height="150" widht="150" alt="Image" align = "center"/>            

        </div>    


    );
  }


export default Home;
import React, { Component, useState, useEffect } from 'react';
import './style.css';
import { Link , useLocation} from 'react-router-dom';
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
    
    const location = useLocation();
    const email = location.state.email;


    useEffect(() => {
        // Update the document title using the browser API
        document.title = "Home";
        
        // Database Acesss
        async function fetchData(){
            const response = await fetch("/ships/" + email);
            const myjson = await response.json();
            setNumberArray(myjson.pedidos.split(","));
            setCompanyArray(myjson.compañias.split(","));
            
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
        
        var log = {"pedidos" : parcel_array.shipnumber.toString(), "compañias" : company_array.toString() };
        await fetch('/ships' + email, {
            method: 'PUT',
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


    const UPSTRUE = true;
    const SEURTRUE = true;
   
    const [upsTrue, setUpsTrue] = useState(UPSTRUE);
    const [seurTrue, setSeurTrue] = useState(SEURTRUE);

    return (
        <div class="login">
          
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>
            <h2><img src={process.env.PUBLIC_URL + "/images/Logo.png"} height="150" widht="150" alt="Image" align = "center"></img></h2>

            <div class="row">
                <button type='button'><Link to="/Login" style={{color:"#FFF"}}>Cerrar sesion</Link></button>
                
            </div>
   
            <br></br>
            <br></br>

            <div class="row">
                <h2>Hola {email} !</h2>
                <Button onClick={() => cargar()}>Cargar</Button>
            </div>

            <br></br>
            <br></br>

            <Add ship_number={ship_number} company={company} handleShipNumber={a => handleShipNumber(a)} 
                handleCompany={a => handleCompany(a)} clickSearch={() => uploadParcel()} clickSave={()=> saveParcel()}/>

            <br></br>

            <div class="col-12  mainPagecontainer ">
                <h2 class="blog-post-title">Pedidos</h2>

                <label><input type="checkbox" value="upsTrue" onChange={e => setUpsTrue(!upsTrue)}/>UPS</label>
                <label><input type="checkbox" value= "seurTrue" onChange={e => setSeurTrue(!seurTrue)}/>SEUR</label>

                <div class="aside">
                    <table>
                    {parcel_array.map((parcel, i) => {return (<Overview index = {i} number={parcel.shipnumber} 
                        company={parcel.company}/>)})}
                    </table>
                </div>   
            </div>



            <h2><img src={process.env.PUBLIC_URL + "/images/LogoSinTexto.png"} height="150" widht="150" alt="Image" align = "center"/></h2>
        </div>    


    );
  }


export default Home;
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
    const DETAILS = false;

    const [parcel_array, setParcelArray] = useState (PARCEL_ARRAY);
    const [ship_number, setShipNumber] = useState(SHIP_NUMBER);
    const [company, setCompany] = useState (COMPANY);
    const [number_array, setNumberArray] = useState (NUMBER_ARRAY);
    const [company_array, setCompanyArray] = useState(COMPANY_ARRAY);
    const [details, setDetails] = useState(DETAILS);

    const location = useLocation();
    const email = location.state.email;
    //const name = location.state.name;


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
        console.log(array);
    }

    async function guardar(){
        var string1 = "";
        parcel_array.map((parcel,i) => {string1 = string1 + "," + parcel.shipnumber.toString()});
        var string2 = "";
        parcel_array.map((parcel,i) => {string2 = string2 + "," + parcel.company.toString()});
        var log = {"pedidos" : string1, "compañias" : string2 };
        const link = '/ships/' + email;
        //console.log(link);
        await fetch(link, {
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
                'aftership-api-key': 'dc14c141-9b50-4470-b510-b1c164cf79a8'
            },
            body: JSON.stringify({tracking: {tracking_number: ship_number}})
        };
        console.log(options);
        const response = await fetch('https://api.aftership.com/v4/trackings', options);
        console.log(response);
        const myjson = await response.json();
        setCompany(myjson.data.tracking.slug);
    }

    function saveParcel(){
        var shipment = {"shipnumber" : ship_number, "company" : company};
        var array = [...parcel_array, shipment];
        setParcelArray(array);
        //guardar();
        setShipNumber("");
        setCompany("");
    }

    function seeDetails(){
        setDetails(!details);
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


   
            <br></br>
            <br></br>

            <div class="row">
                <h3>¡Bienvenido {email} !</h3>
                <button type='button' onClick={() => cargar()}>Cargar</button>
            </div>

            <br></br>
            <br></br>

            <Add ship_number={ship_number} company={company} handleShipNumber={a => handleShipNumber(a)} 
                handleCompany={a => handleCompany(a)} clickSearch={() => uploadParcel()} clickSave={()=> saveParcel()}/>

            <br></br>

            <div class="col-12  mainPagecontainer ">
                <h2 class="blog-post-title">Pedidos</h2>
                <div align="center">
                    <label><input type="checkbox" value={upsTrue} onChange={e => setUpsTrue(!upsTrue)}/>UPS</label>
                    <label><input type="checkbox" value= {seurTrue} onChange={e => setSeurTrue(!seurTrue)}/>SEUR</label>
                    <label><input type="checkbox" value= "seurTrue" onChange={e => setSeurTrue(!seurTrue)}/>MRW</label>
                    <label><input type="checkbox" value= "seurTrue" onChange={e => setSeurTrue(!seurTrue)}/>DHL</label>
                    <label><input type="checkbox" value= "seurTrue" onChange={e => setSeurTrue(!seurTrue)}/>Correos</label>

                </div>




                <div>
                    <table>
                    {parcel_array.map((parcel, i) => {return (<Overview index = {i} number={parcel.shipnumber} 
                        company={parcel.company} details = {details} clickDetails={() => seeDetails()}/>)})}
                    </table>
                </div>   
            </div>
     <div >
            <button type='button' onClick={() => guardar()}><Link to="/Login" >Cerrar sesion</Link></button>                
     </div>
        </div>  




    );
  }


export default Home;
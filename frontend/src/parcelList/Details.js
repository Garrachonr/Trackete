import React, { useState, useEffect } from 'react';
import '../style.css';
import {Button} from 'react-bootstrap';


export default function Details(props) {

    function clickDetails(){
        props.clickDetails();
    }

      return (<div>
            <Button onClick={() => clickDetails()}>Detalles</Button>
            {props.details ? <div></div> : 
                            <div class="container" id="container">
                                <h4>Peso: {props.parcel.shipment_weight} kg</h4>
                                <br></br>
                                <h4>País de Origen: {props.parcel.origin_country_iso3}</h4>
                                <br></br>
                                <h4>Día de recogida: {props.parcel.shipment_pickup_date}</h4>
                                <br></br>
                                <h4>Día de entrega: {props.parcel.shipment_delivery_date}</h4>
                            </div>}
        </div>
    );

}
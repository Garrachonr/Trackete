import React from 'react';
import {Button} from 'react-bootstrap';
import '../style.css';

export default function Add(props) {

    function handleShipNumber(e){
        props.handleShipNumber(e);
    }

    function handleCompany(e){
        props.handleCompany(e);
    }

    function clickSearch(){
        props.clickSearch();
    }

    function clickSave(){
        props.clickSave();
    }

    return (  
        <div class="row">
            <input type="text" className="form" value={props.ship_number} autoComplete="off" placeholder = "Introduzca numero de pedido" onChange = {e => handleShipNumber(e.target.value)}/>
            <br/>
            <input type="text" className="form" value={props.company} autoComplete="off" onChange = {e => handleCompany(e.target.value)}/>
            <br/>
            <Button className="itemNarrow"  onClick={() => clickSearch()}> Buscar Pedido </Button>
            <Button className="itemNarrow"  onClick={() => clickSave()}> Confirmar </Button>
        </div>
    );


}
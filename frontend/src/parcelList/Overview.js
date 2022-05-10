import React, { useState, useEffect } from 'react';
import '../style.css';
import Details from "./Details";


export default function Overview(props) {

    const PARCEL = [{}];

    const [parcel, setParcel] = useState(PARCEL);
    const [loading, setLoading] = useState(true);

    const link = "https://api.aftership.com/v4/trackings/" + props.company + "/" + props.number;

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'aftership-api-key': 'dc14c141-9b50-4470-b510-b1c164cf79a8'
                }
            }
            const response = await fetch(link, options);      
            const myjson = await response.json();
            //console.log(myjson.data.tracking.slug);
            setParcel(myjson);
            setTimeout(() => {setLoading(false)}, 750);
        }
        fetchData();
      }, []);

      return (
        <tbody align = "justify">
            <tr key={"number" + props.index} align="center">
                <td>{loading ? <div></div> : parcel.data.tracking ?  <img src={process.env.PUBLIC_URL + "/images/" + parcel.data.tracking.slug + ".png"} height="200" widht="200"></img> : <div></div>}</td>
               <td></td>
               <td>{loading ? <div></div> : parcel.data.tracking ? <p>{parcel.data.tracking.subtag_message}</p> : <div></div>}</td>
               <td>{loading ? <div></div> : parcel.data.tracking ? <Details details = {props.details} parcel = {parcel.data.tracking} clickDetails={()=> props.clickDetails()}/> : <div></div>}</td>
            </tr>
        </tbody>
    );

}
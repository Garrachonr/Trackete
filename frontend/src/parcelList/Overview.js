import React, { useState, useEffect } from 'react';
import '../style.css';
import Details from "./Details";


export default function Overview(props) {

    const PARCEL = [{}];
    const PARCEL2 = [{}];

    const [parcel, setParcel] = useState(PARCEL);
    //const [parcel2, setParcel2] = useState(PARCEL2);
    const [loading, setLoading] = useState(true);

    const link = "https://api.aftership.com/v4/trackings/" + props.company + "/" + props.number;
   // const raw = "{\r\n    \"trackingNumber\": \"" + props.number + "\"}";

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'aftership-api-key': '3f7f21d6-0de5-4505-8eec-84f61d4359df'
                }
            }
            const response = await fetch(link, options);      
            const myjson = await response.json();
            //console.log(myjson.data.tracking.slug);
            setParcel(myjson);
            setTimeout(() => {setLoading(false)}, 750);
        }

      /*  async function fetchData2() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=utf-8");
            myHeaders.append("Authorization", "apik_DZwsl9HU3SYb0Mm6K8Ga9STAr0WRZg");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            const response = await fetch("https://api.ship24.com/public/v1/tracking/search", requestOptions);      
            const myjson = await response.json();
            //console.log(myjson.data.tracking.slug);
            setParcel2(myjson);
            setTimeout(() => {setLoading(false)}, 750);
        } */
        fetchData();
     //   fetchData2();
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
    // <td>{loading ? <div></div> : parcel2.data.trackings ? <p>{parcel2.data.trackings.shipment.originCountryCode}</p> : <div></div>}</td>


}
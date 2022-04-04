import React, { useState, useEffect } from 'react';
import '../style.css';


export default function Overview(props) {

    const PARCEL = [{}];

    const [parcel, setParcel] = useState(PARCEL);
    const [loading, setLoading] = useState(true);

    const link = "https://api.aftership.com/v4/trackings/" + props.company + "/" + props.number + "/";

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'aftership-api-key': '612c49aa-28f8-4543-b7d9-1ea47b7f1510'
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
        <tbody>
            <tr key={"number" + props.index} align="center">
                <td>{loading ? <div>Cargando</div> : parcel.data.tracking ?  <img src={process.env.PUBLIC_URL + "/images/" + parcel.data.tracking.slug + ".png"} height="200" widht="200"></img> : <div></div>}</td>
               <td>{loading ? <div>Cargando</div> : parcel.data.tracking ? <p>{parcel.data.tracking.slug}</p> : <div></div>}</td>
               <td></td>
               <td>{loading ? <div>Cargando</div> : parcel.data.tracking ? <p>{parcel.data.tracking.subtag_message}</p> : <div></div>}</td>
            </tr>
        </tbody>
    );

}
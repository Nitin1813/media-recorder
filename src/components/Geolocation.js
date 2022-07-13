import { useState } from "react";
import businesslocation from "./img/business-location.jpeg"
export default function Geolocation(){
   
    const [lognitude, setLognitude] = useState("");
  const [latitude, setLatitude] = useState("");

  function getlocation() {
    {
      navigator.geolocation.getCurrentPosition((possition) => {
        setLatitude(possition.coords.latitude);
        setLognitude(possition.coords.longitude);
      });
      
    }
  }

    return(<>
       <h1>Find Location</h1>
    <div className="geolocation">
        <p className="loca">latitude : {latitude}</p>
      <p className="loca">lognitude : {lognitude}</p>
      <button onClick={getlocation} className="location-btn" >Get Location</button>
    
      
        
        </div >
    </>
        )
}
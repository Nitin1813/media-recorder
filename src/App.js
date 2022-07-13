// import "./styles.css";
import { useEffect, useState } from "react";
import "./App.css"
import VideoCapture from "./components/VideoCapture";
import Geolocation from "./components/Geolocation";

export default function App() {
  
  
  return (
    <div className="App">
      <Geolocation />
      <VideoCapture />
      
    </div>
  );
}

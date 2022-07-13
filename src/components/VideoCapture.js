
import { useState } from "react";
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";
import chatImgae from "./img/chat.jpg";
export default function VideoCapture(){
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true });
  const [videostream, setVideoStream] = useState();
    function startHandler() {
        let video = document.getElementById("video");
        let audio = document.getElementById("audio");
        
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          })
          .then(stream => {
            window.localStream = stream;
            video.srcObject = stream;
            audio.srcObject = stream;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      function stopVideo() {
        let video = document.getElementById("video");
        let audio = document.getElementById("audio");
        window.localStream.getVideoTracks()[0].stop();
        video.src = '';
        window.localStream.getAudioTracks()[0].stop();
        audio.src = '';
      }
    
    return(<>
    
              <h1>Video Streaming</h1>
              <div className="video-container">
                <div className="video-item">
                <p>{status}</p>
                <video id="video" src={mediaBlobUrl} controls autoPlay loop />
                <div className="videobutton">
             
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              </div>
                </div>
                <div className="image-item">
                  <img src={chatImgae} />
                </div>
                </div >
      
              {/* 
               
                  <video controls={true} id="video" playsInline="" autoPlay={true} />
              <audio id="audio" className="audiostream" autoPlay={true} />
                  
                    <button onClick={startHandler}>Capture</button>
                    <button onClick={stopVideo}>Stop</button>
                  
               
               */}
    </>)
}
// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import {oneGesture} from "./One";
import {threeGesture} from "./Three";
import {rockGesture} from "./Rock";
import {fourGesture} from "./Four";
import {fiveGesture} from "./Five";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import one from "./one.png";
import three from "./three.png";
import four from "./four.png";
import rock from "./rock.png";
import five from "./five.png";
///////// NEW STUFF IMPORTS

//toast.configure();

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory , One: one, Three: three, Four: four, Rock: rock, Five: five};
  ///////// NEW STUFF ADDED STATE HOOK

  const sleep = ms => new Promise(r => setTimeout(r, ms));
var activated = false;
  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    while (true){
      //if function is activated, wait so each functions can't be consecutively activate to prevent false positives
      if (activated === true){
        await sleep(3000);
        activated = false;
      };
      detect(net);
      await sleep(600);
    }
  };

  var lastPos = null;
  var thisname = null;

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          oneGesture,
          threeGesture,
          rockGesture,
          fourGesture,
          fiveGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          //console.log(gesture.gestures[maxConfidence].name);

          thisname = gesture.gestures[maxConfidence].name;
          setEmoji(thisname);

          if (thisname !== null){
            console.log(thisname);
          }

          if (thisname === lastPos && thisname !== null){
            toast.info("Activated function: " + thisname, {autoClose: 3000});
            activated = true;
            lastPos = null;
          } else {
            lastPos = thisname;
          }
          
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    
    <div className="App">
    <ToastContainer />
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

export default App;

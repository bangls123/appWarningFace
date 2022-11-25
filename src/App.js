import './App.css';
import {Howl, Howler} from 'howler';
import * as mobinenet from '@tensorflow-models/mobilenet';
import * as KNN from '@tensorflow-models/knn-classifier';
import  SoundUrl from './assets/123.mp3';
import React, { useEffect, useRef } from 'react';

// var sound = new Howl({
//   src: [SoundUrl]
// });
// sound.play();
 function App() {
  const video = useRef();
  const init = async () => {
      console.log('a');
      await setupCamera();
  }
  const setupCamera = () => {
    return new  Promise((resolve, reject) =>{
      navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
      if (navigator.getUserMedia){
        navigator.getUserMedia(
          { video: true},
          stream => {
            video.current.srcObject = stream;
            video.current.addEventListener('loadeddata', resolve);
          }, error => reject(error)
        );
      }else{
        reject();
      }
    });
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
        <video
          ref={video}
          className="video"
          autoPlay
        />
        <div className="control">
          <button className="btn">Train1</button>
          <button className="btn">Train2</button>
          <button className="btn">Run</button>
        </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import Notification from "./components/Notification";
function App() {
  return (
    <>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </>
  );
}

export default App;

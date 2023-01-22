import React, {useState} from 'react';
import videoData from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  const [isHidden, setIsHidden] = useState(true)
 
  return (
    <div className="App">
      <Video isHidden={isHidden} setIsHidden={setIsHidden} data={videoData} />
      <Comments isHidden={isHidden} comments={videoData.comments} />
    </div>
  );
}

export default App;

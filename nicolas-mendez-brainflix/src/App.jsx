import { useState } from 'react';
import Header from './components/Header/Header';
import Video from './components/video/video';
import Body from './components/Body/body';
import VideoSuggestions from './components/VideoSuggestions/VideoSuggestions';
import Data from './data/video-details.json';
import Comments from './components/Comments/Comments';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoSelect = (index) => {
    setCurrentIndex(index);
  };

  const currentVideo = Data[currentIndex];

  return (
    <div>
      <Header />
      <Video currentVideo={currentVideo}/>
      <Body currentVideo={currentVideo} />
      <Comments currentVideo={currentVideo}/>
      <VideoSuggestions 
        videos={Data} 
        currentIndex={currentIndex} 
        handleVideoSelect={handleVideoSelect} 
      />
    </div>
  );
}

export default App;
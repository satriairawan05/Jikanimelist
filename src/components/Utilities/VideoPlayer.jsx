"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = { width: "300", height: "250" };
  const handleVideo = () => {
    setIsOpen((prevState) => !prevState);
  };
  const Player = () => {
    return (
      <>
        <div className="fixed bottom-0 right-0">
          <button onClick={handleVideo} className="float-right px-3 mb-1 text-xl transition-all rounded shadow-xl text-anime-dark bg-anime-primary hover:text-anime-accent lg:bottom-0 lg:right-0">
            X
          </button>
          <Youtube videoId={youtubeId} onReady={(e) => e.target.pauseVideo} opts={option} onError={() => alert("Video's broken,  please try again later!")} />
        </div>
      </>
    );
  };

  const BtnPlayer = () => {
    return (
      <>
        <button onClick={handleVideo} className="float-right px-3 mb-1 text-xl transition-all rounded shadow-xl text-anime-dark bg-anime-primary hover:text-anime-accent lg:bottom-0 lg:right-0">
          Tonton Trailer
        </button>
      </>
    );
  };
  return isOpen ? <Player /> : <BtnPlayer />;
};

export default VideoPlayer;

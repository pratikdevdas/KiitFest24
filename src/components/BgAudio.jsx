"use client";
import React, { useState, useRef } from "react";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

const BgAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} loop src="/Assets/bgaudio.mp3" />
      <button onClick={playPauseHandler}>
        {isPlaying ? (
          <VscUnmute className=" text-2xl" />
        ) : (
          <IoVolumeMuteSharp className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default BgAudio;
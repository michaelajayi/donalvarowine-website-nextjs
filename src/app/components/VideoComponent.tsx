"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

import playBtn from "../../../public/icons/play.svg";

const VideoComponent = () => {
  const wineVideo = "/videos/wine-video.mp4";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleIsPlaying = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='w-full h-auto flex flex-col justify-center items-center py-20 dark:bg-custom-dark bg-custom-light relative space-y-0'>
      <div className='w-full h-full flex justify-center items-center px-[74px]'>
        <div className='w-full h-auto relative'>
          <VideoPlayer videoSrc={wineVideo} videoRef={videoRef} />
          <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
            <Image
              src={playBtn}
              alt='play btn'
              className='cursor-pointer'
              onClick={toggleIsPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;

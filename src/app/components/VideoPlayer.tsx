import React, { RefObject } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  videoRef: RefObject<HTMLVideoElement>;
}

const VideoPlayer = ({ videoSrc, videoRef }: VideoPlayerProps) => {
  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      loop
      muted
      className='w-full h-full object-cover'
      controls={false}
    >
      <source src={videoSrc} type='video/mp4' />
    </video>
  );
};

export default VideoPlayer;

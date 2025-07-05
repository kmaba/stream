import { useCallback, useEffect, useRef, useState } from "react";

export interface LoadingProps {
  text?: string;
  className?: string;
}

export function Loading(props: LoadingProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down playback slightly
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full z-50 ${props.className ?? ""}`}
    >
      <div className="absolute inset-0 bg-dark-bg/95" />
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="w-auto h-[80vh] max-h-[800px] object-contain"
          autoPlay
          muted
          playsInline
          onLoadedData={handleVideoLoad}
        >
          <source src="/loader.webm" type="video/webm" />
        </video>
        {props.text && props.text.length ? (
          <p className="absolute bottom-10 text-sm text-light-grey opacity-75">
            {props.text}
          </p>
        ) : null}
      </div>
    </div>
  );
}

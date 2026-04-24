"use client";

import { useState } from "react";

export default function TestimonialVideoCard({
  name,
  quote,
  videoId,
  videoSrc
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-card">

      {/* VIDEO AREA */}
      <div
        className="video-container"
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {videoSrc ? (
              <video
                src={videoSrc}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="video-preview"
              />
            ) : (
              <div className="video-fallback" />
            )}

            {/* PLAY BUTTON */}
            <div className="video-overlay">
              <div className="play-btn">▶</div>
            </div>
          </>
        ) : videoSrc ? (
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="video-player"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="video-player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="video-content">
        <div className="t-rating">★★★★★</div>

        <p className="t-text">"{quote}"</p>

        <h4 className="video-name">{name}</h4>
      </div>

    </div>
  );
}
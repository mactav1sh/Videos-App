import "./videoItem.css";
import React from "react";
export default function VideoItem({ video, onVideoSelect }) {
  // onVideoSelect(video.id.videoId);
  // () => onVideoSelect(video.id.videoId)
  return (
    <div onClick={onVideoSelect.bind(this, video)} className="video-item item ">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content ">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

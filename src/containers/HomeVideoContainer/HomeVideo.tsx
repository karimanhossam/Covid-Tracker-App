import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import MuteIcon from "@material-ui/icons/VolumeUp";
import UnMuteIcon from "@material-ui/icons/VolumeOff";
import "./HomeVideo.css";

function HomeVideo() {
  const [muted, setMuted] = useState(true);
  const handleToggleMute = () => setMuted((current) => !current);

  return (
    <div id="home">
      <div className="player-wrapper">
        <ReactPlayer
          url={process.env.PUBLIC_URL + "/homevideo.mp4"}
          config={{ youtube: { playerVars: { disablekb: 1 } } }}
          className="react-player"
          playing={true}
          loop={true}
          muted={muted}
          width="100%"
          height="100%"
          controls={false}
        />
        <div className="actions-video">
          <IconButton
            className="mute-Btn"
            aria-label="mute"
            onClick={handleToggleMute}
          >
            {!muted && <MuteIcon className="playIcon" />}
            {muted && <UnMuteIcon className="playIcon" />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default HomeVideo;

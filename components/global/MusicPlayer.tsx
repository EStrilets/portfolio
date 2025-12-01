'use client'

import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

export function MusicPlayer() {
  return (
    <div className="timeline-music-player">
      <AudioPlayer
        src='/audio/TomMeiraArmory2.mp4'
        autoPlay
        layout="stacked"
        showSkipControls={false}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        customProgressBarSection={[]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
        customAdditionalControls={[]}
        customVolumeControls={[RHAP_UI.VOLUME]}
        className="timeline-audio-player"
      />
    </div>
  );
}
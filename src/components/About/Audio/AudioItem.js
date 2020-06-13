import React from 'react';

const AudioItem = ({ track }) => {
  return (
    <iframe title={track} width="80%" height="100" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%23783fbe&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`} />
  )
}

export default AudioItem

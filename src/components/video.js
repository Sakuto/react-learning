import React from 'react'

const BASE_URL = "https://www.youtube.com/embed/";

export const Video = ({youtubeId}) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`${BASE_URL}${youtubeId}`} title="Iframe" />
    </div>
  )
}

export default Video

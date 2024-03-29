import React, { useState, useEffect } from "react";
import "./YouTube.css";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key= AIzaSyC_DDk2RvdIWFnk6t5F_yDi-lVou-QtID4

// My API KEY = AIzaSyC_DDk2RvdIWFnk6t5F_yDi-lVou-QtID4;
//  "id": "UCE_M8A5yxnLfW0KghEeajjw"

function YoutubeVideos() {
  const [youtubeVideos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=%20AIzaSyC_DDk2RvdIWFnk6t5F_yDi-lVou-QtID4"
    )
      .then((result) => result.json())
      .then((data) => {
        setVideos(data.items);
      });
  }, []);
  console.log(youtubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youtubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="video"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideos;

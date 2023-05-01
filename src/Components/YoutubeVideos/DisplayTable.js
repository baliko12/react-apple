import React, { useState, useEffect } from "react";
import "./DisplapTable.css";
function DisplayTable() {
  // make use of the useState hook to store all the data that we fetch.

  const [youtubeVideos, setVideos] = useState([]);

  // we’re fetching the data inside the useEffect hook so that it only loads the data on the initial render.
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
    <div>
      <table>
        <thead>
          <tr>
            <th>Video Id</th>
            <th>Video Link</th>
            <th>Video Thumbnail</th>
            <th>Video Title</th>
            <th>Video Description</th>
          </tr>
        </thead>
        <tbody>
          {youtubeVideos.map((videoData, i) => (
            <tr key={i}>
              <td>{videoData.id.videoId}</td>
              <td>
                <a
                  href={`https://www.youtube.com/watch?v=${videoData.id.videoId}`}
                >
                  https://www.youtube.com/watch?v=${videoData.id.videoId}
                </a>
              </td>
              <td>
                <a href={videoData.snippet.thumbnails.high.url}>
                  <img
                    src={videoData.snippet.thumbnails.high.url}
                    alt={videoData.snippet.title}
                    style={{ width: "100%" }}
                  />
                </a>
              </td>
              <td>{videoData.snippet.title}</td>
              <td>{videoData.snippet.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayTable;

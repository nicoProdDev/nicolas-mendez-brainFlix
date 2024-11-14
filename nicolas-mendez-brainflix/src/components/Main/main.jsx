import Video from "../video/video";
import Comments from "../Comments/Comments";
import VideoSuggestions from "../VideoSuggestions/VideoSuggestions";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, baseUrl } from "../../utils/utils";
import { useParams } from "react-router-dom";

function Main({nextVideos}) {
    return (
        <main className="main">
            <Video video={displayedVideo} />
            <Comments comments={displayedVideo ? displayedVideo.comments : []} id={videoId || defaultVideoId} />
            <VideoSuggestions nextVideos={nextVideos} videoId={videoId || defaultVideoId} />
        </main>
    );
}

export default Main;

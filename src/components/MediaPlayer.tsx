import ReactPlayer from "react-player";
function MediaPlayer() {
    return (
        <div className="">
            <ReactPlayer 
            url="https://www.youtube.com/shorts/_OEiBtO3E9U" 
            controls 
            playing
            loop
            width="100%"
            height="60vh"
            className="video-player"
            />
        </div>
    );
}

export default MediaPlayer
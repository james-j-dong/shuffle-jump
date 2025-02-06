import ReactPlayer from "react-player";
function MediaPlayer() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-[270px] h-[584px] overflow-hidden rounded-[2.5rem] shadow-xl drop-shadow-lg border border-gray-700 bg-black"
                style={{ boxShadow: "0 5px 30px rgba(0, 0, 0, 0.5)" }}
            >
                <ReactPlayer 
                    url="https://www.youtube.com/shorts/_OEiBtO3E9U" 
                    controls 
                    playing
                    loop
                    width="100%"
                    height="100%"
                    className="video-player"
                />
            </div>
        </div>
    );
}

export default MediaPlayer
import React from "react";
import ReactPlayer from "react-player";

function MediaPlayer({ url = "https://www.youtube.com/shorts/mcHUXUgHu7E" }) {
    return (
        <div className="flex items-center justify-center w-full h-full p-4">
            <div 
                className="relative aspect-[9/19.5] w-[270px] max-w-[90vw] overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-700 bg-black"
                style={{ boxShadow: "0 5px 30px rgba(0, 0, 0, 0.5)" }}
            >
                <ReactPlayer 
                    url={url}
                    controls 
                    playing
                    loop
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
}

export default MediaPlayer;

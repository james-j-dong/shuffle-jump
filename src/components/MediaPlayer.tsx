// import ReactPlayer from "react-player";

// function MediaPlayer({ url = "https://www.youtube.com/shorts/mcHUXUgHu7E" }) {
//     return (
//         <div className="flex items-center justify-center w-full h-full p-4">
//             <div 
//                 className="relative aspect-[9/19.5] w-[270px] max-w-[90vw] overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-700 bg-black"
//                 style={{ boxShadow: "0 5px 30px rgba(0, 0, 0, 0.5)" }}
//             >
//                 <ReactPlayer 
//                     url={url}
//                     controls 
//                     playing
//                     loop
//                     width="100%"
//                     height="100%"
//                 />
//             </div>
//         </div>
//     );
// }

import React, { useState, useRef, useEffect } from 'react';

function MediaPlayer (videoUrl : string) {
    const defaultWidth = 270;
    const defaultHeight = 584;
    const defaultMargin = 16;
    const [position, setPosition] = useState({
        x : window.innerWidth - defaultWidth - defaultMargin,
        y: window.innerHeight - defaultHeight - defaultMargin
    });

    //user interactions tracker
    const [size, setSize] = useState({width : defaultWidth, height : defaultHeight});
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const dragStart = useRef({ x : 0, y : 0 });
    const resizeStart = useRef({ x : 0, y : 0, width : defaultWidth, height : defaultHeight });

    useEffect(() => {
        function handleMouseMove(e : MouseEvent) {
            console.log("mouse moved");
            if (isDragging) {
                const deltaX = e.clientX - dragStart.current.x;
                const deltaY = e.clientY - dragStart.current.y;
                setPosition(prev => ({ x : prev.x + deltaX, y : prev.y + deltaY }));
                dragStart.current = { x : e.clientX, y : e.clientY };
            } else if (isResizing) {
                const deltaX = e.clientX - resizeStart.current.x;
                const deltaY = e.clientY - resizeStart.current.y;
                setSize({
                    width : Math.max(200, resizeStart.current.width + deltaX), 
                    height : Math.max(150, resizeStart.current.height + deltaY)
                });
            }
        };

        function handleMouseUp() {
            setIsDragging(false);
            setIsResizing(false);
        };

        function cleanupListeners() {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return cleanupListeners;

    }, [isDragging, isResizing]);

    if (isClosed) {
        return null;
    }
}

export default MediaPlayer;

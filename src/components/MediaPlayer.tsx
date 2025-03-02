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

import { useState, useRef, useEffect } from 'react';

interface MediaPlayerProps {
    videoUrl : string;
}

function MediaPlayer (MediaPlayerProps : MediaPlayerProps) {
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
    return (
        <div
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            width: isMinimized ? 200 : size.width,
            height: isMinimized ? 40 : size.height,
            background: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            borderRadius: 10,
            overflow: 'hidden',
            zIndex: 1000,
            transition: 'height 0.2s, width 0.2s',
          }}
        >
          {/* Header for dragging and controls */}
          <div
            style={{
              background: '#333',
              color: '#fff',
              padding: '8px',
              cursor: 'move',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              dragStart.current = { x: e.clientX, y: e.clientY };
            }}
          >
            <span>Video Player</span>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent dragging when clicking
                  setIsMinimized(!isMinimized);
                }}
                style={{
                  marginRight: 8,
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                {isMinimized ? 'Show' : 'Minimize'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsClosed(true);
                }}
                style={{
                  background: 'red',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                X
              </button>
            </div>
          </div>
    
          {/* Main content: Only render the iframe if not minimized */}
          {!isMinimized && (
            <div style={{ width: '100%', height: `calc(100% - 40px)`, position: 'relative' }}>
              <iframe 
                src={`/embed?url=${encodeURIComponent(MediaPlayerProps.videoUrl)}`}
                width="100%" 
                height="100%" 
                allowFullScreen
                style={{ display: 'block' }}
              ></iframe>
              {/* Resize handle in the bottom-right */}
              <div
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsResizing(true);
                  resizeStart.current = { x: e.clientX, y: e.clientY, width: size.width, height: size.height };
                }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 20,
                  height: 20,
                  cursor: 'nwse-resize',
                  background: 'transparent',
                }}
              ></div>
            </div>
          )}
        </div>
      );
};

export default MediaPlayer;

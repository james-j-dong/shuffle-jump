

function createEmedCode(videoUrl : string) {
    const baseUrl = import.meta.env.PROD ? "https://example.com" : "http://localhost:5173";
    const iframeStyle = `
        position: fixed; 
        bottom: 16px; 
        right: 16px; 
        width: 270px; 
        height: 584px; 
        max-width: 100%; 
        max-height: 100%;
        border: none; 
        background: transparent; 
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); 
        border-radius: 40px; 
        overflow: hidden;
    `
    const embedCode = `
        <iframe src="${baseUrl}/embed?url=${encodeURIComponent(videoUrl)}" 
            width="270" 
            height="584" 
            frameborder="0" 
            style="${iframeStyle}" 
            allowfullscreen>
        </iframe>
    `
    return embedCode;
}


function EmbedTool() {
    const embedCode = createEmedCode("https://www.youtube.com/shorts/mcHUXUgHu7E");
    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-md">
            <label className="block mb-2 font-medium text-black">Embed Code To Paste:</label>
            <textarea 
                className="w-full p-2 border rounded bg-gray-100 text-black" 
                readOnly 
                value={embedCode} 
                rows={3}
            />
        </div>
    );
}

export default EmbedTool;

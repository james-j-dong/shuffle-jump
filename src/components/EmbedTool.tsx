

function EmbedTool() {
    const embedCode = `<iframe src="http://localhost:5173?url=${encodeURIComponent("https://www.youtube.com/shorts/mcHUXUgHu7E")}" width="270" height="584" frameborder="0" style="border: none; background: transparent; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); border-radius: 40px; overflow: hidden;" allowfullscreen></iframe>`;

    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-md">
            <label className="block mb-2 font-medium">Embed Code:</label>
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

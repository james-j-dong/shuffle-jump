import { Link } from "react-router-dom"
function Home() {
    return (
        <>
            <div className="container mx-auto text-center text-black p-4">
                <h1 className="text-xl font-bold mb-4">Shuffle Jump Video Tool</h1>
                <div className="flex flex-row justify-center gap-4">
                    <Link to="/embed" className="btn-primary">Embed Link</Link>
                    <Link to="/mediaplayer" className="btn-secondary">Video Preview</Link>
                </div>
            </div>
        </>
    );
}
export default Home;
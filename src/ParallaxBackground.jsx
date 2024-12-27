import { Parallax } from "react-scroll-parallax";

function BackgroundParallax() {
    return (
        <>

            <div className="images">
        <Parallax speed={-2}>
                <img id="img1" src="Images/parallax1.png" alt="" />
        </Parallax>
        <Parallax speed={-1}>
                <img id="img2" src="Images/parallax2.png" alt="" />
        </Parallax>
        <Parallax speed={-3}>
                <img id="img3" src="Images/parallax3.png" alt="" />
        </Parallax>

            </div>
        </>
    );
}
export default BackgroundParallax
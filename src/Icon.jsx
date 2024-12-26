function Icon({ imagePath, link }) {
    return (
        <div className="icon" style={{}}>
            <a href={link}>
                <img src={imagePath} alt="Missing footage" />
            </a>
        </div>
    );
}
export default Icon
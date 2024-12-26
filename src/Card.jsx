function Card({name, desc, img}) {

    return(
        <div className="card" style={{}}>
            <img src={img} alt="" />
            <div className="container">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}
export default Card
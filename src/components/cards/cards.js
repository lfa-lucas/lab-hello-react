function Cards(props) {
    
    return (
        <article className="cards">
            <img className="card-icon"
                src={props.cardIcon}
                alt="some icon"
            />
            <p className="card-title">{props.cardTitle}</p>
            <p className="card-text">{props.cardText}</p>
        </article>
    )
}

export default Cards
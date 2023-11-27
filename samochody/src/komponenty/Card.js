import '../style/Card.css'

function Card(props) {
    return(
        <div className="Card">
            <h2>{props.title}</h2>
            <div className="img-kontener">
                <img src={props.imageSource} className="img" alt="obrazek Fiat" />
            </div>
            <p>Lorem ipsum</p>
            <a href={props.link} target="_blank" className="card-link" rel="noreferrer">Więcej szczegółów</a>
        </div>
    );
}

export default Card;
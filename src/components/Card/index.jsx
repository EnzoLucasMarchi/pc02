import './Card.css'

export const Card = ({ title, text, style, icon }) => {
    return (
        <div className="card" style={style}>
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>
            <figure className="img-container">
                {icon}
            </figure>
        </div>
    )
}
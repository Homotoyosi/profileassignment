import "./card.css"
const Card = (props)=>{
    return(
        <div className="container">
            <div className={`profilecard ${props.color}`}>
                <img src={props.image} alt="" />
                <h3>{props.text}</h3>
                <p>{props.age}</p>
                <p>{props.location}</p>
                

            </div>

        </div>
    )
}
export default Card
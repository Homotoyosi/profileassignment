import "./Product.css"
const Product =(props)=>{
    return(
        <div>
             
            <div className={`productlisting ${props.color}`}>
                <img src={props.image} alt="Loading" />
                <h1>{props.text}</h1>
                <a href={props.link} target="_blank"> <h4>{props.word}</h4></a>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>

        </div>
    )
}
export default Product
import "./Blog.css"
const Blog =(props)=>{
    return(
      <div>
        <div className={`Blogcard ${props.color}`}>
            <h1>{props.tittle}</h1>
            <h3>{props.text}</h3>
            <p>{props.content}</p>
            <p id="date">{props.date}</p>
        </div>
      </div>
    )
  }
  export default Blog
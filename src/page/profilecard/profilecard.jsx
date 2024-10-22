import Card from "../../component/card/card"
import Africanwoman from "../../assets/african-woman.png"
import franck from "../../assets/franck_full.png"
import youngman from "../../assets/Young-Man-PNG-image.png"
import Man from "../../assets/manpic.png"
import "./profilecard.css"

const Profilecard = ()=>{
    return (
        <div>
             <h1 className="profile">Profile Card</h1>
        <div className="cardcontent">
            <Card image={Africanwoman} color="card1" text="Halimah Adeleke" age="51 years" location="Ikoyi" />
            <Card image={franck} color="card2" text="Sodiq Omiobe" age="54 years" location="Ikorodu" />
            <Card image={youngman} color="card3" text="Samuel Johnson" age="28 years" location="New Jersey" />
            <Card image={Man} color="card4" text="Peter Okoye" age="57 years" location="Abeokuta" />
        </div>
        </div>
    )
}
export default Profilecard
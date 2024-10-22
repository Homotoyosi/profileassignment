import Product from "../../../../product-listing/src/component/product/Product"
import Dessert from "../../assets/dessert.png"
import Furniture from "../../assets/furniture.png"
import Laptop from "../../assets/laptop.png"
import iPhone from "../../assets/iPhone-15.png"
import "./Productlisting.css"

const Productlisting = ()=>{
    return (
        <div>
            <h1 className="pro">Product listing Page</h1>
        <div className="produtcontent">
            <Product image={Dessert} color="listing1" word="Dessert Link" text="Dessert" description="Desserts are sweet dishes typically served at the end of a meal, ranging from baked goods to frozen treats and confections" price="N 234,000" link="https://homotoyosi.github.io/dessert/" />
            <Product image={Furniture} color="listing2" word="Furniro Link" text="Furniture" description="Furniture refers to movable objects designed to support human activities such as seating, eating, sleeping, and working." price="N 150,000" link="https://homotoyosi.github.io/Furniro/" />
            <Product image={Laptop} color="listing3" word="Laptop Link" text="Laptop" description="A laptop is a portable personal computer designed for mobility, offering the functionality of a desktop computer in a compact form" price="N 64,000" link="https://th.bing.com/th/id/R.b0dd389bc010f9b524c10f4e977bc282?rik=2bXFXchqkwhysA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-notebook-png-image-image-6746-1153.png&ehk=6byFAarnH09NpQkcILADyXHoQI1AG%2bVFwkFkGcmpSnQ%3d&risl=&pid=ImgRaw&r=0" />
            <Product image={iPhone} color="listing4" word="iPhone Link" text="iPhone" description="iPhone is a line of smartphones designed by Apple known for its sleek design and advanced technology, with the Apple ecosystem." price="N 240,000" link="https://png.pngtree.com/png-clipart/20231007/ourmid/pngtree-iphone-15-blue-png-image_10194578.png" />
        </div>
        </div>
    )
}
export default Productlisting
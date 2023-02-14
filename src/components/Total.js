import { useDispatch, useSelector } from "react-redux"
import "./Total.css"
import "./Total_media.css"
import productList from "../productList.json"
import {addToCart,removeFormCart} from "../redux/CartSlice"
import Footer from "./Footer";
import { fetchAllProducts } from "../redux/ProductList"
import { useEffect } from "react"



function Total(){

    const dispatch = useDispatch();
    const state= useSelector(state=> state);
    const {cart,products} = state;
    // const {cartProductId} =useSelector(state=>state.cart)

    useEffect(()=>{
        dispatch(fetchAllProducts('../productList.json/products'))
    },[dispatch])
    return(
        <div id="boxHome">
            <h3>전체 상품</h3>
            <div>
        {
            // products.data? true 였을 때 작업을 하고 아니면 error로 연결함, 
    products.data?.map((item)=>
    {return <figure key={item.id}>
        <img src={item.imageUrl} alt={item.name} />
        <figcaption>
            <dl>
                <dt>{item.name}</dt>
                <dd>{item.price}</dd>
                <dd>                    
                {(!cart.cartProductId.includes(item.id)) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart(item.id))}}
                >추가</button>)}
            
              {(cart.cartProductId.includes(item.id))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart(item.id))}
                }
                >삭제</button>)}
                </dd>
            </dl>
        </figcaption>
    </figure>}
    )

}
</div>
<Footer />
 </div>

    )
}



export default Total;
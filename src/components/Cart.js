import "./Cart.css"
import "./Cart_media.css"
import Footer from "./Footer";
import { useSelector,useDispatch } from "react-redux";
import {removeFormCart, clearAllItem} from "../redux/CartSlice"
import productList from "../productList.json"
import {BsCart} from 'react-icons/bs';


function Cart(){
    const {cartProductId} = useSelector(state => state.cart);
    const cartProductData= productList.products.filter( item=> cartProductId.includes(item.id));
    
    let dispatch=useDispatch();
    return(
        <div id="boxCart1">
            <h3>장바구니 목록</h3>

            <div id="boxCart2">
            {cartProductData.map((item)=> {return <figure key={item.id}>
            <img src={`${item.imageUrl}`} alt={item.name} />
            <figcaption>
                <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.price}</dd>
                    <dd><button type="button"
                    onClick={()=> dispatch(removeFormCart(item.id))}
                    >삭제</button></dd>
                </dl>
            </figcaption>
        </figure>}
        )
}


</div>


<div id="allClear">
<p><button type="button"
    onClick={()=> dispatch(clearAllItem())}
    >모두 비우기</button></p>
  {(cartProductData.length<1)  && (<div><BsCart />
    <p>장바구니가 비었습니다 <br />
    카트에 종목을 추가하지 않습니다.</p>
    
    </div>)}

</div>


<Footer />

        </div>

)
}


export default Cart;
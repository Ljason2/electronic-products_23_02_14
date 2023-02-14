import { useDispatch, useSelector } from "react-redux"
import "./Sale1.css"
import "./Sale1_media.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Sale1(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Sale1">
                <h3>오늘만 특가</h3>
            <div>
            <figure>
                <img src="../images/eleven.png" alt="eleven" />
                <figcaption>
                    <dl>
                        <dt>CT토스터</dt>
                        <dd>감성 디자인, 빵데우기, 간편조작</dd>
                        <dd><del>28,000원</del> <ins>18,000원</ins></dd>
                        <dd>
                        {(!cartProductId.includes("11")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("11"))}}
                >추가</button>)}
            
              {(cartProductId.includes("11"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("11"))}
                }
                >삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
            </figure>
        </div>
        <Footer />
        </div>
    )
}


export default Sale1;
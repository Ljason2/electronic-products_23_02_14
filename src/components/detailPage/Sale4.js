import { useDispatch, useSelector } from "react-redux"
import "./Sale1.css"
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
                <img src="../images/twelve.png" alt="twelve" />
                <figcaption>
                    <dl>
                        <dt>반반 멀티 전기그릴</dt>
                        <dd>스마트베리 K 그릴 전용 뚜껑</dd>
                        <dd><del>30,000원</del> <ins>19,000원</ins></dd>
                        <dd>
                        {(!cartProductId.includes("12")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("12"))}}
                >추가</button>)}
            
              {(cartProductId.includes("12"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("12"))}
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
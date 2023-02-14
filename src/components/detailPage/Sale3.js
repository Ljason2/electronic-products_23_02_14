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
                <img src="../images/twentynine.jpg" alt="twentynine" />
                <figcaption>
                    <dl>
                        <dt>메디니스 각탕기</dt>
                        <dd>기포가 두들겨 주는 버블스파 <br /> 미세 온도조절, 폭 넓고 깊은 욕조</dd>
                        <dd><del>34,000원</del> <ins>28,000원</ins></dd>
                        <dd>
                        {(!cartProductId.includes("29")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("29"))}}
                >추가</button>)}
            
              {(cartProductId.includes("29"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("29"))}
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
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
                <img src="../images/ninteen.jpg" alt="ninteen" />
                <figcaption>
                    <dl>
                        <dt>올스텐 에어프라이어</dt>
                        <dd>스테인리스 열선 보호망으로 <br /> 더 안전하게 사용가능</dd>
                        <dd><del>59,000원</del> <ins>44,000</ins></dd>
                        <dd>
                        {(!cartProductId.includes("19")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("19"))}}
                >추가</button>)}
            
              {(cartProductId.includes("19"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("19"))}
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
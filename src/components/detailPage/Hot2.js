import { useDispatch, useSelector } from "react-redux"
import "./Hot1.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Hot2(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Hot1">
            <h3>지금 가장 뜨는 상품</h3>
            <div>
            <figure>
                <img src="../images/thirtyfive.jpg" alt="thirtyfive" />
                <figcaption>
                    <dl>
                        <dt>미닉스 미니건조기</dt>
                        <dd>누적 판매율 1위, 3kg 적재가능 <br /> 다용도 건조기, 신기술 채택</dd>
                        <dd>938,000원</dd>
                        <dd>
                        {(!cartProductId.includes("35")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("35"))}}
                >추가</button>)}
            
              {(cartProductId.includes("35"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("35"))}
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


export default Hot2;
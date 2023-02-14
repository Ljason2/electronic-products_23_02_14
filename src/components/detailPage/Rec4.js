import { useDispatch, useSelector } from "react-redux"
import "./Rec1.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Rec4(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Rec1">

            <h3>추천 상품</h3>
            <div>
            {/* 1 */}
            <figure>
                <img src="../images/twentythree.jpg" alt="twentythree" />
                <figcaption>
                    <dl>
                        <dt>에어쉐프 에어프라이어</dt>
                        <dd>뜨거운 바람이 순환하여 <br /> 골고루 데워주는 컨벡션 기능</dd>
                        <dd>43,000원</dd>
                        <dd>
                        {(!cartProductId.includes("23")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("23"))}}
                >추가</button>)}
            
              {(cartProductId.includes("23"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("23"))}
                }
                >삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
            </figure>

            {/* 2 */}
            <figure>
                <img src="../images/four.jpg" alt="four" />
                <figcaption>
                    <dl>
                        <dt>CRP밥솥</dt>
                        <dd>2018 신모델 스테디셀러 디자인
                         </dd>
                        <dd>58,000원</dd>
                        <dd>
                        {(!cartProductId.includes("4")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("4"))}}
                >추가</button>)}
            
              {(cartProductId.includes("4"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("4"))}
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


export default Rec4;
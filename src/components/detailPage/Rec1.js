import { useDispatch, useSelector } from "react-redux"
import "./Rec1.css"
import "./Rec1_media.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Rec1(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Rec1">

            <h3>추천 상품</h3>
            <div>
            {/* 1 */}
            <figure>
                <img src="../images/two.jpg" alt="two" />
                <figcaption>
                    <dl>
                        <dt>비스포크냉장고</dt>
                        <dd>더 깔끔하고 넓어보이는 정돈된 <br /> 내상 플랫 엣지 디자인</dd>
                        <dd>1,695,000원</dd>
                        <dd>
                        {(!cartProductId.includes("2")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("2"))}}
                >추가</button>)}
            
              {(cartProductId.includes("2"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("2"))}
                }
                >삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
            </figure>

            {/* 2 */}
            <figure>
                <img src="../images/thirtythree.jpg" alt="thirtythree" />
                <figcaption>
                    <dl>
                        <dt>캐리어 클라윈드 냉장고</dt>
                        <dd>심플한 감성의 <br /> 엣지핸들 디자인 <br /> 반영구적인 UV 청정제균</dd>
                        <dd>939,000원</dd>
                        <dd>
                        {(!cartProductId.includes("33")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("33"))}}
                >추가</button>)}
            
              {(cartProductId.includes("33"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("33"))}
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


export default Rec1;
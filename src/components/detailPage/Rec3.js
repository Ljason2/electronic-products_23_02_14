import { useDispatch, useSelector } from "react-redux"
import "./Rec1.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Rec3(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Rec1">

            <h3>추천 상품</h3>
            <div>
            {/* 1 */}
            <figure>
                <img src="../images/one.jpg" alt="one" />
                <figcaption>
                    <dl>
                        <dt>DD모터세탁기</dt>
                        <dd>통이 돌아서 빨래가 잘되는 <br />  진짜 통돌이</dd>
                        <dd>993,000원</dd>
                        <dd>
                        {(!cartProductId.includes("1")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("1"))}}
                >추가</button>)}
            
              {(cartProductId.includes("1"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("1"))}
                }
                >삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
            </figure>

            {/* 2 */}
            <figure>
                <img src="../images/thirtyone.jpg" alt="thirtyone" />
                <figcaption>
                    <dl>
                        <dt>그랑데 건조기</dt>
                        <dd>쾌속하고 빠른 건조가 가능하고 <br /> 신기술 도입으로 더욱 청결하게!
                         </dd>
                        <dd>992,000원</dd>
                        <dd>
                        {(!cartProductId.includes("31")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("31"))}}
                >추가</button>)}
            
              {(cartProductId.includes("31"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("31"))}
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


export default Rec3;
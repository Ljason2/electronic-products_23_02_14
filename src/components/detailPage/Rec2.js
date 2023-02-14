import { useDispatch, useSelector } from "react-redux"
import "./Rec1.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Rec2(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Rec1">

            <h3>추천 상품</h3>
            <div>
            {/* 1 */}
            <figure>
                <img src="../images/three.jpg" alt="three" />
                <figcaption>
                    <dl>
                        <dt>TCL티비</dt>
                        <dd>스탠드/벽걸이구분 설치지원방식</dd>
                        <dd>2,300,000원</dd>
                        <dd>
                        {(!cartProductId.includes("3")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("3"))}}
                >추가</button>)}
            
              {(cartProductId.includes("3"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("3"))}
                }
                >삭제</button>)}
                        </dd>
                    </dl>
                </figcaption>
            </figure>

            {/* 2 */}
            <figure>
                <img src="../images/thirtytwo.jpg" alt="thirtytwo" />
                <figcaption>
                    <dl>
                        <dt>브리츠 사운드바</dt>
                        <dd>BAR 타입의 스피커 <br /> 정격출력 6W의 유닛을 탑재 <br />
                         USB 포트에 연결가능</dd>
                        <dd>21,900원</dd>
                        <dd>
                        {(!cartProductId.includes("32")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("32"))}}
                >추가</button>)}
            
              {(cartProductId.includes("32"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("32"))}
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


export default Rec2;
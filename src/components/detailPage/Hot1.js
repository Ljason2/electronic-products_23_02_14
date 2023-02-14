import { useDispatch, useSelector } from "react-redux"
import "./Hot1.css"
import "./Hot1_media.css"
import {addToCart,removeFormCart} from "../../redux/CartSlice"
import Footer from "../Footer";




function Hot1(){

    const dispatch = useDispatch();
    const {cartProductId} =useSelector(state=>state.cart)

    return(
        <div id="Hot1">
            <h3>지금 가장 뜨는 상품</h3>
            <div>
            <figure>
                <img src="../images/thirtyfour.jpg" alt="thirtyfour" />
                <figcaption>
                    <dl>
                        <dt>마하 하이파이 사운드바</dt>
                        <dd>블루투스5.0, 시계와 알람<br /> TF카드지원, 무선 리모컨 <br /> 4D 입체사운드 ,140W급 출력</dd>
                        <dd>89,000원</dd>
                        <dd>
                        {(!cartProductId.includes("34")) && (<button type="button"
                onClick={
                    ()=>{return dispatch(addToCart("34"))}}
                >추가</button>)}
            
              {(cartProductId.includes("34"))&&(<button type="button"
                onClick={
                    ()=>{return dispatch(removeFormCart("34"))}
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


export default Hot1;
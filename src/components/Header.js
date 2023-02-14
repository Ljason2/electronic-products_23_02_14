import { Link } from "react-router-dom";
import "./Header.css"
import { BsFillCartFill } from 'react-icons/bs';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { useSelector } from 'react-redux';




function Header(){
    const {cartProductId} = useSelector((state)=> state.cart)

    return(
        <header>
        <div>
        <nav>
            <ul>
                <li><Link to="/"><FcSmartphoneTablet /> 전자마왕</Link></li>
                <li><Link to="/total">전체상품</Link></li>
                <li><Link to="/rental">가전렌탈</Link></li>
                <li><Link to="/cart">< BsFillCartFill /> 
                <span>{cartProductId.length}</span>
                </Link></li>
            </ul>
        </nav>
        </div>
        </header>
        )
}


export default Header;
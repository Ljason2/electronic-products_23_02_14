import "./Home.css"
import $ from 'jquery';
import { Link } from "react-router-dom";
import Footer from "./Footer";


$(function(){
    // ㅡㅡㅡㅡㅡㅡㅡ 움직이기ㅡㅡㅡㅡㅡㅡㅡㅡ
    
    
        // 준비하기
        let liWidth2= $('#show>ul>li').width();
        $('#show>ul>li:last').prependTo('#show>ul');     
        $('#show>ul').css('margin-left','-'+liWidth2+'px');
        let str2;
        
        
        // 타이머 작동
        timer2()
        
        // 타이머에 들어가는 함수
        function ani2(){
                $('#show>ul').animate({marginLeft:"+="+liWidth2+"px"},function(){
                        $('#show>ul>li:last').prependTo('#show>ul');
                        $('#show>ul').css('marginLeft','-'+liWidth2+'px');
                })
        }
        
    
        // 타이머를 작동시키는 함수
        
        function timer2(){
                str2 = setInterval(ani2,3000)
        }
        
        
        // 타이머를 중단시키는 함수
        function stop2(){
                clearInterval(str2)
        }
        
        
        // 타이머 이벤트 작동
        
        
        $('#show>ul>li').each(function(){
                $(this).on('mouseenter',function(){
                        stop2();
                })
        })
        
        
        $('#show>ul>li').each(function(){        
                $(this).on('mouseleave',function(){
                        timer2();
                })
        })
        })



function Home(){
    return(
        <div id="home">

        <h1>카테고리 추천 상품</h1>

        <ul>
            <li><button> <Link to="/rec1">냉장고</Link></button></li>
            <li><button> <Link to="rec2">TV/사운드바</Link></button></li>
            <li><button>  <Link to="rec3">세탁기/건조기</Link></button></li>
            <li><button><Link to="rec4">주방가전</Link></button></li>
        </ul>
        <div id="show">
        <ul>

        {/* 1 */}
        <li style={{backgroundColor:"burlywood"}}><Link><img src="./images/nangjango.jpg" alt="nangjango" /></Link>
        </li>

        {/* 2 */}
        <li style={{backgroundColor:"brown"}}><Link><img src="./images/tv.jpg" alt="tv" /></Link>
        </li>


        {/* 3 */}
        <li style={{backgroundColor:"pink"}}><Link><img src="./images/setak.jpg" alt="setak" /></Link>
        </li>

        {/* 4 */}
        <li style={{backgroundColor:"orange"}}><Link><img src="./images/jubang.jpg" alt="jubang" /></Link>
        </li>
        </ul>
        </div>

        <h1>오늘만 특가</h1>
        <div id="sale">
            <ul>
                <li><Link to="sale1"><img src="./images/eleven.png" alt="eleven" /></Link></li>
                <li><Link to="sale2"><img src="./images/ninteen.jpg" alt="ninteen" /></Link></li>
                <li><Link to="sale3"><img src="./images/twentynine.jpg" alt="twentynine" /></Link></li>
                <li><Link to="sale4"><img src="./images/twelve.png" alt="twelve" /></Link></li>
            </ul>
        </div>

        <h1>전자마왕 YOUTUBE</h1>

        <div id="youtube">
            <ul>
                <li><Link to="https://www.youtube.com/watch?v=60jir5Jk5SY"><img src="./images/youtube1.PNG" alt="youtube1" /></Link></li>
                <li><Link to="https://www.youtube.com/watch?v=BTPyvFGImLA"><img src="./images/youtube2.PNG" alt="youtube2" /></Link></li>
                <li><Link to="https://www.youtube.com/watch?v=B7-CYd9Mlbo"><img src="./images/youtube3.PNG" alt="youtube3" /></Link></li>
            </ul>
        </div>



        <h1>지금 가장 뜨는 상품</h1>

        <div id="hot">
            <ul>
            <li><Link  to="/hot1"><img src="./images/thirtyfour.jpg" alt="thirtyfour" /></Link></li>
                <li><Link to="/hot2"><img src="./images/thirtyfive.jpg" alt="thirtyfive" /></Link></li>
            </ul>
        </div>


        <Footer />
        </div>
    )
}


export default Home;
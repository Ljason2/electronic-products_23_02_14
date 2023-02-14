import Header from './components/Header'
import "./App.css"
import "./App_media.css"
import { Link } from 'react-router-dom';

function App ({children}){
    return(
            <div id="wrap">
            <Header />
            <div>
            {children}
            </div>
    
    <div id='qr'>
        <Link to="/">전자마왕</Link>
        <figure>
            <img src="./images/electronic-logo.png" alt="electronic-logo" />
          <div>
            <img src="./images/mypageqr.png" alt="QR코드" />
            <div>
                <span>앱 설치하고 <br />
                전자제품 알림받기! <br />
                </span>
                <span>다운로드로 연결됩니다.</span>
            </div>
            </div>  
        </figure>
    </div>
            </div>
        );
}


export default App;
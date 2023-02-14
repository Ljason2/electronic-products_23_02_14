import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Cart from "./components/Cart"
import App from "./App"
import Total from "./components/Total"
import { Provider } from "react-redux";
import store from "./store"
import Rental from "./components/Rental"
import Hot1 from "./components/detailPage/Hot1"
import Hot2 from "./components/detailPage/Hot2"
import Sale1 from "./components/detailPage/Sale1"
import Sale2 from "./components/detailPage/Sale2"
import Sale3 from "./components/detailPage/Sale3"
import Sale4 from "./components/detailPage/Sale4"
import Rec1 from "./components/detailPage/Rec1"
import Rec2 from "./components/detailPage/Rec2"
import Rec3 from "./components/detailPage/Rec3"
import Rec4 from "./components/detailPage/Rec4"

function Main(){
  return (
    
    <Provider store={store}>
      <BrowserRouter>
      <App>
      <Routes>
        <Route path="/"   element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/total" element={<Total />}/>
        <Route path="/rental" element={<Rental />}/>
        <Route path="/hot1" element={<Hot1 />}/>
        <Route path="/hot2" element={<Hot2 />}/>
        <Route path="/sale1" element={<Sale1 />}/>
        <Route path="/sale2" element={<Sale2 />}/>
        <Route path="/sale3" element={<Sale3 />}/>
        <Route path="/sale4" element={<Sale4 />}/>
        <Route path="/rec1" element={<Rec1 />}/>
        <Route path="/rec2" element={<Rec2 />}/>
        <Route path="/rec3" element={<Rec3 />}/>
        <Route path="/rec4" element={<Rec4 />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
      </App>
      </BrowserRouter>
      </Provider>
  );
}

export default Main;

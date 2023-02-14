import { Fragment, useState } from 'react';
import {MdEditCalendar} from 'react-icons/md'
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { TiSortNumerically } from "react-icons/ti";
import {FcPlanner } from "react-icons/fc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineContentPaste } from "react-icons/md";




function AddWrite({toggleForm,formData,setFromData,formPublish}){

    if(!toggleForm){return null }
 

    // if(!toggleForm || false){
    //     return null
    // }


    // if(!toggleForm && true){
    //     return null
    // }

    return(
        <Fragment>
<ul>

<li>
<label htmlFor="userName">
<div><MdDriveFileRenameOutline/></div>이름</label>
<input 
type="text" id="userName"
onChange={(event)=>{  
    setFromData({...formData,name:event.target.value})
}}    
/>
</li>



<li>
<label htmlFor="productName">
<div><FaProductHunt/></div>
상품명</label>
<input type="text" id="productName"
onChange={(event)=>{  
    setFromData({...formData,productName:event.target.value})
}}    
/>
</li>



<li>
<label htmlFor="startDate">
<div><FcPlanner/></div>    
렌탈시작날짜</label>
<input type="date" id="startDate"
onChange={(event)=>{  
    setFromData({...formData,date:event.target.value})
}}    

/>
</li>


<li>
<label htmlFor="endDate">
<div><FcPlanner/></div>
렌탈종료날짜</label>
<input type="date" id="endDate"
onChange={(event)=>{  
    setFromData({...formData,lastDate:event.target.value})
}}    
/>
</li>



<li>
<label htmlFor="quantity">
<div><TiSortNumerically/></div>    
수량</label>
<input type="text" id="quantity"
placeholder='숫자만 입력해주세요'
onChange={(event)=>{  
    setFromData({...formData,quantity:event.target.value})
}}
/>
</li>



<li>
<label htmlFor="price">
<div><RiMoneyDollarCircleFill/></div>    
렌탈료</label>
<input type="text" id="price"
placeholder='숫자만 입력해주세요'
onChange={(event)=>{  
    setFromData({...formData,price:event.target.value})
}}    
/>
</li>



<li>
<label htmlFor="content">
<div><MdOutlineContentPaste/></div>    
렌탈내용</label>
<textarea id="content"
onChange={(event)=>{
    setFromData({...formData,content:event.target.value})
}}    
></textarea>
</li>
</ul>

<p>
    <button type="submit"
    onClick={formPublish}
    >예약하기</button>
</p>
</Fragment>
    )
}





function AddAppointment({onSendAppointment, lastId}){

    // 비어있는 객체 ->reset
    const clearData={
    "name": "",
    "productName": "",
    "date": "",
    "quantity":"",
    "price":"",
    "content":""
    }
        

    // state
    const [toggleForm,setToggleForm]=useState(false);
    const [formData,setFromData]=useState(clearData);


    function formPublish(){
        // 합본 객체
        const appointmentInfo ={
            id: lastId + 1,
            name: formData.name,
            productName:  formData.productName,
            date:  formData.date + '~' + formData.lastDate,
            quantity: formData.quantity,
            price : formData.price,
            content : formData.content
        }
        // 데이터 보내기
        onSendAppointment(appointmentInfo)
        // reset
        setToggleForm(!toggleForm)
        setFromData(clearData)
    }

    return(
        <div id="appoint">
        <h3> <span><CgSmartHomeRefrigerator /></span> 가전 렌탈 예약</h3>
        <h4
onClick={()=> setToggleForm(!toggleForm)}
>
<span><MdEditCalendar /></span> 
예약하기</h4>
<AddWrite
toggleForm={toggleForm}
formData = {formData}
formPublish={formPublish}
setFromData={setFromData}
/>

        </div>
    )
}



export default AddAppointment;
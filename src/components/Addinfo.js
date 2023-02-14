import { FaTrash } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineContentPaste } from "react-icons/md";



function Addinfo({appointment,onDelectAppoint}){
    return(
        <li>
        <dl>
        <dd className="name"><div><MdDriveFileRenameOutline/></div> 이름:{appointment.name}</dd>
        <dd className="productName"><div><FaProductHunt/></div>상품명: {appointment.productName}</dd>
        <dd className="date"><div><FcOvertime/></div>렌탈기간 : {appointment.date}</dd>
        <dd className="quantity"><div><BsPersonFill/></div>수량: {appointment.quantity}개</dd>
        <dd className="price"><div><RiMoneyDollarCircleFill/></div>렌탈료: {appointment.price}원</dd>
        <dd className="content"><div><MdOutlineContentPaste/></div>렌탈내용: {appointment.content}</dd>
        </dl>
        <button 
        onClick={()=>
            onDelectAppoint(appointment.id)
        }
        type="button"><FaTrash /></button>
        </li>
    )
}



export default Addinfo;
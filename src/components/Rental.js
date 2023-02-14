import "./Rental.css"
import "./Rental_media.css"
import { useCallback, useEffect, useState } from "react";
import Search from "../components/Search"
import Addinfo from "../components/Addinfo"
import AddAppointment from "../components/AddAppointment"
import Footer from "./Footer";

function Rental(){

    const [appointList,setAppointList]=useState([]);
    const [query,setQuery]=useState("");
    const [sortBy,setSortBy]=useState("name");
        // console.log(query)

    const filterAppointments = appointList.filter(
        (item)=> {return (item.name.includes(query) || 
                            item.content.includes(query)||
                            `${item.quantity}`.includes(query) ||
                            `${item.price}`.includes(query)||
                            item.productName.includes(query)
                            )})
    .sort((a,b)=> 
    {return sortBy==="date"? (a[sortBy] > b[sortBy] ? -1 : 1) : (a[sortBy] < b[sortBy] ? -1 : 1)}
    )

    const fetchData = useCallback(
        ()=>{
            fetch(`./data.json`)
            .then(response => response.json())
            .then(data=> setAppointList(data))
        },[]
    );


    useEffect(
        fetchData,[fetchData]
    )


    return(
        <div id="rental">
            <article>

            <AddAppointment 
             onSendAppointment = {
            myAppointment=> setAppointList([...appointList,myAppointment])
            }
            lastId={
            appointList.reduce((max, item) => Number(item.id) > max ? Number(item.id) :max,1)
            }
            />


            <Search 
            query={query}
            onQueryChange={ myQuery=> setQuery(myQuery)}
            sortBy={sortBy}
            onSortChange={ (mySortBy)=>setSortBy(mySortBy)}            
            />


            <div id="list">
            <h3>예약리스트</h3>
            <ul>
            {
            filterAppointments.map(
            (appointment)=>
             (<Addinfo key={appointment.id} 
            appointment={appointment}
            onDelectAppoint ={ appointmentId =>
                setAppointList(
                    filterAppointments.filter(
                        appointment=> appointment.id !== appointmentId
                    )
                )
            }
            />
            ))
            }
        </ul>
            </div>
            </article>
            <Footer />
        </div>
    )
}




export default Rental;
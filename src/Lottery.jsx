import { genTicket } from "./helper";
import "./Lottery.css";
import{ useState } from "react"


function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    return ( 
        <div className="lottery">
            <h1>Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
     );
}

export default Lottery;
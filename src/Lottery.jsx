import { genTicket, sum } from "./helper";
import "./Lottery.css";
import{ useState } from "react"


function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    return ( 
        <div className="lottery">
            <h1>Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
     );
}

export default Lottery;
import './navbar.css';
import logo from "../img/LOGO.png";
import call from "../img/call.png";
import ban from "../img/banner.jpg";


export default function navbar() {
    return (
        <div>
            <div className='headbar'>
                <img src={logo} />
                <div className="phone">
                    <img src={call} />
                    <p>1306</p>
                </div>
            </div>

                <img className='banner' src={ban} />

        </div>
    )
}
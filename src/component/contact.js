import './contact.css';
import map from "../img/Map.png";
import logo2 from "../img/LOGO2.png";
import call2 from "../img/call2.png";
import fb from "../img/facebook.png";


export default function contact() {

    function changeimg1() {
        document.getElementById("ggmap").src = logo2
        document.getElementById("grapmap").style.background="white"
        document.getElementById("grapmap").style.color="#053d53"
        document.getElementById("googlemap").style.background="#053d53"
        document.getElementById("googlemap").style.color="white"
        
    }
    function changeimg2() {
        document.getElementById("ggmap").src = map
        document.getElementById("googlemap").style.background="white"
        document.getElementById("googlemap").style.color="#053d53"
        document.getElementById("grapmap").style.background="#053d53"
        document.getElementById("grapmap").style.color="white"
    }



    return (
        <div className='contact'>
            <div className='info'>
                <div className='desc'>
                    <h1>The Heart of North Bangkok</h1>
                    <p>เตรียมพบบ้านและทาวน์โฮมโครงการใหม่ ให้คุณได้ใช้ชีวิตติดไลฟ์สไตล์<br />ใจกลางกรุงเทพฯโซนเหนือ</p>
                    <ul>
                        <li>ใกล้ฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</li>
                        <li>ใกล้ทางด่วนและรถไฟฟ้าสถานีรังสิต</li>
                        <li>เดินทางเข้า-ออกสะดวก กับทำเลติดถนนพหลโยธิน</li>
                    </ul>
                    <button type="button" id="grapmap" onClick={changeimg1}>GRAPHIC MAP</button>
                    <button type="button" id="googlemap" onClick={changeimg2}>GOOGLE MAP</button>
                </div>
                <div className='map'>
                    <img src={map} id="ggmap" />
                </div>
            </div>
            <div className='foot'>
                <div className='logo2'>
                    <img src={logo2} />
                </div>
                <div className='copyright'>
                    <p>Copyright © 2019 All rights reserved.</p>
                    <div className='ifb'>
                    <img className='borderr' src={fb} />
                    </div>
                    <img className="" src={call2} />
                    
                    <h1>1306</h1>
                </div>
            </div>
        </div>
    )
}
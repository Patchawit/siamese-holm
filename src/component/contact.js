import './contact.css';
import logo2 from "../img/LOGO2.png";
import call2 from "../img/call2.png";
import fb from "../img/facebook.png";


export default function contact() {

    // function changeimg1() {
    //     document.getElementById("ggmap").src = logo2
    //     document.getElementById("grapmap").style.background = "white"
    //     document.getElementById("grapmap").style.color = "#053d53"
    //     document.getElementById("googlemap").style.background = "#053d53"
    //     document.getElementById("googlemap").style.color = "white"

    // }
    function changeimg2() {
        document.getElementById("ggmap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.0194849147806!2d100.61919795021066!3d14.016858990128197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec32f7aa96e3a1c4!2zMTTCsDAxJzAwLjciTiAxMDDCsDM3JzE3LjAiRQ!5e0!3m2!1sen!2sth!4v1659412602761!5m2!1sen!2sth"
        document.getElementById("googlemap").style.background = "white"
        document.getElementById("googlemap").style.color = "#053d53"
        document.getElementById("grapmap").style.background = "#053d53"
        document.getElementById("grapmap").style.color = "white"
    }



    return (
        <div className='contact'>
            <div className='container-fluid' style={{width:"85vw"}}>
                <div className='info'>
                <div className='row'>
                    <div className='col-sm-6 col-12'>
                        <div className='desc'>
                        <h1>The Heart of North Bangkok</h1>
                        <p>เตรียมพบบ้านและทาวน์โฮมโครงการใหม่ ให้คุณได้ใช้ชีวิตติดไลฟ์สไตล์<br />ใจกลางกรุงเทพฯโซนเหนือ</p>
                        <ul>
                            <li>ใกล้ฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</li>
                            <li>ใกล้ทางด่วนและรถไฟฟ้าสถานีรังสิต</li>
                            <li>เดินทางเข้า-ออกสะดวก กับทำเลติดถนนพหลโยธิน</li>
                        </ul>
                        <div className='btmap'>
                        <button type="button" id="grapmap">GRAPHIC MAP</button>
                        <button type="button" id="googlemap" onClick={changeimg2} >GOOGLE MAP</button>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-12'>
                        <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.0194849147806!2d100.61919795021066!3d14.016858990128197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec32f7aa96e3a1c4!2zMTTCsDAxJzAwLjciTiAxMDDCsDM3JzE3LjAiRQ!5e0!3m2!1sen!2sth!4v1659412602761!5m2!1sen!2sth" id="ggmap" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
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
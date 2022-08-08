import React from 'react'
import './thankyou.css';
import Leafe from "../img/LEAFE.png";
import Line from "../img/LINE.png";
import { Link } from 'react-router-dom';


export default function Thankyou() {
    return (
        <div className='thank'>
            <img className='leafe' src={Leafe} />
            <img className='line' src={Line} />
            <h1>Thank you for <br />registration</h1>
            <p>ขอบคุณสำหรับการลงทะเบียน<br />เจ้าหน้าที่โครงการจะติดต่อกลับโดยเร็ว</p>
            <Link to="/" className='btnback'>
                กลับสู่เว็บไซต์
            </Link>
        </div>
    )
}


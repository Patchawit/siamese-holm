import './formregis.css';
import bg from "../img/BG.png";
import { useState } from 'react';




export default function Formregis() {

    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [number,setNumber] = useState('')
    const [email,setEmail] = useState('')
    const [design,setDesign] = useState('')
    const [budget,setBudget] = useState('')

    const inputName = (event) =>{
        setName(event.target.value)
    }
    const inputSurname = (event) =>{
        setSurname(event.target.value)
    }
    const inputNumber = (event) =>{
        setNumber(event.target.value)
    }
    const inputEmail = (event) =>{
        setEmail(event.target.value)
    }
    const inputDesign = (event) =>{
        setDesign(event.target.value)
    }
    const inputBudget = (event) =>{
        setBudget(event.target.value)
    }
    const saveInfo = (event) =>{
        event.preventDefault()

    }


    return (
        <div className='regis'>
            <img src={bg} />
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่<br />ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form onSubmit={saveInfo}>
                <div className='container-fluid' style={{width:"75vw"}}>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='ชื่อ*' onChange={inputName}></input>
                        </div>
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='นามสกุล*' onChange={inputSurname}></input>
                        </div>
                    </div>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='เบอร์โทรศัพท์*' onChange={inputNumber}></input>
                        </div>
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='อีเมล' onChange={inputEmail}></input>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' style={{width:"75vw"}}>
                    <div className="row opinput">
                        <div className="col-sm-6 col-12">
                            <select id="mydesign" placeholder='แบบบ้านที่สนใจ*' onChange={inputDesign}>
                                <option value="0">แบบบ้านที่สนใจ*</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-12">
                            <select id="mybudget" placeholder='งบประมาณ*' onChange={inputBudget}>
                                <option value="0">งบประมาณ*</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
            
        </div>
    )
}
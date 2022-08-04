import './formregis.css';
import bg from "../img/BG.png";
import { useState } from 'react';




export default function Formregis() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
    }



    return (
        <div className='regis'>
            <img src={bg} />
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่<br />ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form onSubmit={handleSubmit}>
                <div className='container-fluid' style={{ width: "75vw" }}>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <div class="form-group">                               
                                <input className='form-input' placeholder=' ' type="text" name="firstName" onChange={handleChange}></input>
                                <label className='form-label'>ชื่อ*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                
                                <input className='form-input' placeholder=' ' type="text" name="surName" onChange={handleChange}></input>
                                <label className='form-label'>นามสกุล*</label>
                            </div>
                        </div>
                    </div>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' type="text" name="number" onChange={handleChange}></input>
                                <label className='form-label'>เบอร์โทรศัพท์*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">                               
                                <input className='form-input' placeholder=' ' type="text" name="email" onChange={handleChange}></input>
                                <label className='form-label'>อีเมล</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' style={{ width: "75vw" }}>
                    <div className="row opinput">
                        <div className="col-sm-6 col-12">
                            <select id="mydesign" placeholder='แบบบ้านที่สนใจ*' name="design" onChange={handleChange}>
                                <option value="0">แบบบ้านที่สนใจ*</option>
                                <option value="1">บ้านเดี่ยว</option>
                                <option value="2">บ้านแฝด</option>
                                <option value="3">ทาวน์โฮม</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-12">
                            <select id="mybudget" placeholder='งบประมาณ*' name="budget" onChange={handleChange}>
                                <option value="0">งบประมาณ*</option>
                                <optgroup label="แบบบ้านเดี่ยว">
                                    <option value="1">6-7 ล้านบาท</option>
                                    <option value="2">7-8 ล้านบาท</option>
                                    <option value="3">8-9 ล้านบาท</option>
                                    <option value="4">9-10 ล้านบาท</option>
                                    <option value="5">10-11 ล้านบาท</option>
                                    <option value="6">11-12 ล้านบาท</option>
                                    <option value="7">มากกว่า 12 ล้านบาท</option>
                                </optgroup>
                                <optgroup label="แบบบ้านแฝด,ทาวน์โฮม">
                                    <option value="8">2-3 ล้านบาท</option>
                                    <option value="9">3-4 ล้านบาท</option>
                                    <option value="10">4-5 ล้านบาท</option>
                                    <option value="11">5-6 ล้านบาท</option>
                                    <option value="12">มากกว่า 6 ล้านบาท</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>

        </div>
    )
}
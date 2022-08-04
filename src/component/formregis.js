import './formregis.css';
import bg from "../img/BG.png";
import { useEffect, useState } from 'react';




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

    

    useEffect(() => {

        var subjectObject = {
            "แบบบ้านที่สนใจ*":[],
            "บ้านเดี่ยว": ["6-7 ล้านบาท", "7-8 ล้านบาท", "8-9 ล้านบาท", "9-10 ล้านบาท", "10-11 ล้านบาท", "11-12 ล้านบาท", "มากกว่า 12 ล้านบาท"],
            "บ้านแฝด": ["2-3 ล้านบาท", "3-4 ล้านบาท", "4-5 ล้านบาท", "5-6 ล้านบาท", "มากกว่า 6 ล้านบาท"],
            "ทาวน์โฮม": ["2-3 ล้านบาท", "3-4 ล้านบาท", "4-5 ล้านบาท", "5-6 ล้านบาท", "มากกว่า 6 ล้านบาท"]
        }
        document.querySelector('#mydesign').innerHTML = '';
        
        var subjectSel = document.getElementById("mydesign");
        var topicSel = document.getElementById("mybudget");
        for (var x in subjectObject) {
            subjectSel.options[subjectSel.options.length] = new Option(x, x);
            console.log("1")
        }
        
        subjectSel.onchange = function () {
            topicSel.length = 1;

            for (var y in subjectObject[this.value]) {
                topicSel.options[topicSel.options.length] = new Option(subjectObject[this.value][y], subjectObject[this.value][y]);
            }
        }


    }, [])


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
                                <input className='form-input' placeholder=' ' autoComplete='off' required type="text" name="firstName" onChange={handleChange}></input>
                                <label className='form-label'>ชื่อ*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">

                                <input className='form-input' placeholder=' ' autoComplete='off' required type="text" name="surName" onChange={handleChange}></input>
                                <label className='form-label'>นามสกุล*</label>
                            </div>
                        </div>
                    </div>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' autoComplete='off' required type="text" name="number" onChange={handleChange}></input>
                                <label className='form-label'>เบอร์โทรศัพท์*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' autoComplete='off'  type="text" name="email" onChange={handleChange}></input>
                                <label className='form-label'>อีเมล*</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' style={{ width: "75vw" }}>
                    <div className="row opinput">
                        <div className="col-sm-6 col-12">
                            <select id="mydesign" placeholder='แบบบ้านที่สนใจ' name="design" onChange={handleChange}>
                                <option value="0">แบบบ้านที่สนใจ*</option>
                            </select>

                        </div>
                        <div className="col-sm-6 col-12">
                            <select id="mybudget" placeholder='งบประมาณ' name="budget" onChange={handleChange}>
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
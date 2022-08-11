import './formregis.css';
import bg from "../img/BG.png";
import { useEffect, useState } from 'react';
import Axios from 'axios'
import $ from "jquery";
import { Link } from 'react-router-dom';



export default function Formregis() {

    // const [registerList, setregisterList] = useState([])
    const [result, setResult] = useState("");

    const [firstName, setfisrtName] = useState("");
    const [surName, setsurName] = useState("");
    const [numberp, setNumberp] = useState("");
    const [email, setEmail] = useState("");
    const [design, setDesign] = useState("");
    const [budget, setBudget] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
            
        });
        window.location.href = "/#/thankyou";
    
    };
    


    // const addRegis = () => {
    //     Axios.post("http://localhost:3001/addregister", {
    //         firstName: firstName,
    //         surName: surName,
    //         number: number,
    //         email: email,
    //         design: design,
    //         budget: budget
    //     }).then(() => {
    //         setregisterList([
    //             ...registerList,
    //             {
    //                 firstName: firstName,
    //                 surName: surName,
    //                 number: number,
    //                 email: email,
    //                 design: design,
    //                 budget: budget
    //             },
    //         ]);
    //     });
    // };




    // useEffect(() => {

    //     var subjectObject = {
    //         "แบบบ้านที่สนใจ*": [],
    //         "บ้านเดี่ยว": ["6-7 ล้านบาท", "7-8 ล้านบาท", "8-9 ล้านบาท", "9-10 ล้านบาท", "10-11 ล้านบาท", "11-12 ล้านบาท", "มากกว่า 12 ล้านบาท"],
    //         "บ้านแฝด": ["2-3 ล้านบาท", "3-4 ล้านบาท", "4-5 ล้านบาท", "5-6 ล้านบาท", "มากกว่า 6 ล้านบาท"],
    //         "ทาวน์โฮม": ["2-3 ล้านบาท", "3-4 ล้านบาท", "4-5 ล้านบาท", "5-6 ล้านบาท", "มากกว่า 6 ล้านบาท"]
    //     }
    //     document.querySelector('#mydesign').innerHTML = '';

    //     var subjectSel = document.getElementById("mydesign");
    //     var topicSel = document.getElementById("mybudget");
    //     for (var x in subjectObject) {
    //         subjectSel.options[subjectSel.options.length] = new Option(x, x);

    //     }

    //     subjectSel.onchange = function () {
    //         topicSel.length = 1;

    //         for (var y in subjectObject[this.value]) {
    //             topicSel.options[topicSel.options.length] = new Option(subjectObject[this.value][y], subjectObject[this.value][y]);
    //         }
    //     }


    // }, [])

    $(document).ready(function(){
        var $des = $('select[name=design]'),
            $bud = $('select[name=budget]');
    
        $des.change(function(){
            var $this = $(this).find(':selected'),
                rel = $this.attr('rel'),
                $set = $bud.find('option.' + rel);
            
            /* if ($set.size() < 0) {
                $items.hide();
                return;
            } */
            
            $bud.show().find('option').hide();
            
            $set.show().first().prop('selected', true);
        });
    });


    return (
        <div className='regis'>
            <img src={bg} />
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่<br />ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form action="https://siameseholm.com/php/server.php" //http://localhost:8000/server.php
                method="post"
                onSubmit={(event) => handleSumbit(event)}>
                <div className='container-fluid' style={{ width: "75vw" }}>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' autoComplete='off' required
                                    type="text"
                                    name="firstName"
                                    onChange={(event) => {
                                        setfisrtName(event.target.value)
                                    }}>
                                </input>
                                <label className='form-label'>ชื่อ*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">

                                <input className='form-input' placeholder=' ' autoComplete='off' required
                                    type="text"
                                    name="surName"
                                    onChange={(event) => {
                                        setsurName(event.target.value)
                                    }}>
                                </input>
                                <label className='form-label'>นามสกุล*</label>
                            </div>
                        </div>
                    </div>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' autoComplete='off' required
                                    type="number"
                                    name="numberp"
                                    onChange={(event) => {
                                        setNumberp(event.target.value)
                                    }}>
                                </input>
                                <label className='form-label'>เบอร์โทรศัพท์*</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div class="form-group">
                                <input className='form-input' placeholder=' ' autoComplete='off'
                                    type="email"
                                    name="email"
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}>
                                </input>
                                <label className='form-label'>อีเมล</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' style={{ width: "75vw" }}>
                    <div className="row opinput">
                        <div className="col-sm-6 col-12">
                            {/* <select id="mydesign" required
                                name="design"
                                onChange={(event) => {
                                    setDesign(event.target.value)
                                }}>
                                <option value="">แบบบ้านที่สนใจ*</option>
                            </select> */}
                            <select name="design" required
                                onChange={(event) => {
                                    setDesign(event.target.options[event.target.selectedIndex].text)
                                }}>
                                <option value="">แบบบ้านที่สนใจ*</option>
                                <option value="00089" rel="home">บ้านเดี่ยว</option>
                                <option value="00090" rel="house">บ้านแฝด-ทาวน์โฮม</option>
                            </select>


                        </div>
                        <div className="col-sm-6 col-12">
                            {/* <select id="mybudget" required
                                name="budget"
                                onChange={(event) => {
                                    setBudget(event.target.value)
                                }}>
                                <option value="">งบประมาณ*</option>
                            </select> */}
                            <select name="budget" required 
                                onChange={(event) => {
                                    setBudget(event.target.value)
                                }}>
                                <option value="" class="home">งบประมาณ*</option>
                                <option value="6 - 7 MB." class="home">6-7 ล้านบาท</option>
                                <option value="7 - 8 MB." class="home">7-8 ล้านบาท</option>
                                <option value="8 - 9 MB." class="home">8-9 ล้านบาท</option>
                                <option value="9 - 10 MB." class="home">9-10 ล้านบาท</option>
                                <option value="10 - 11 MB." class="home">10-11 ล้านบาท</option>
                                <option value="11 - 12 MB." class="home">11-12 ล้านบาท</option>
                                <option value="More than 12 MB." class="home">มากกว่า 12 ล้านบาท</option>
                                <option value="" class="house">งบประมาณ*</option>
                                <option value="2 - 3 MB." class="house">2-3 ล้านบาท</option>
                                <option value="3 - 4 MB." class="house">3-4 ล้านบาท</option>
                                <option value="4 - 5 MB." class="house">4-5 ล้านบาท</option>
                                <option value="5 - 6 MB." class="house">5-6 ล้านบาท</option>
                                <option value="More than 6 MB." class="house">มากกว่า 6 ล้านบาท</option>

                            </select>

                        </div>
                    </div>
                </div>
                {/* <Link to="/thankyou"> */}
                <button type="submit">ลงทะเบียน</button>
                {/* </Link> */}
            </form>
        </div>
    )
}
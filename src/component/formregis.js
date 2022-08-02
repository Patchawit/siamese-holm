import './formregis.css';
import bg from "../img/BG.png";
import Form from 'react-bootstrap/Form';




export default function formregis() {
    return (
        <div className='regis'>
            <img src={bg} />
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่<br />ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form>
                <div className='container'>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='ชื่อ*'></input>
                        </div>
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='นามสกุล*'></input>
                        </div>
                    </div>
                    <div className="row textinput">
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='เบอร์โทรศัพท์*'></input>
                        </div>
                        <div className="col-sm-6 col-12">
                            <input type="text" placeholder='อีเมล'></input>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className="row opinput">
                        <div className="col-sm-6 col-12">
                            <select placeholder='แบบบ้านที่สนใจ*'>
                                <option value="0">แบบบ้านที่สนใจ*</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-12">
                            <select placeholder='งบประมาณ*'>
                                <option value="0">งบประมาณ*</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <button type="button">ลงทะเบียน</button>
        </div>
    )
}
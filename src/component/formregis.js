import './formregis.css';


export default function formregis() {
    return (
        <div className='regis'>
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่ ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form>
                <input type="text" placeholder='name'></input>
                <input type="text" placeholder='surname'></input>
            </form>
            <form>
                <input type="text" placeholder='phonenumber'></input>
                <input type="text" placeholder='email'></input>
            </form>
            <form>
                <select id="house" placeholder='แบบบ้านที่สนใจ'>
                    <option value=""></option>
                </select>
                <select id="house" placeholder='แบบบ้านที่สนใจ'>
                    <option value=""></option>
                </select>
            </form>
            <button type="button" onclick="">ลงทะเบียน</button>
        </div>
    )
}
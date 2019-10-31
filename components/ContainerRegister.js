import Link from 'next/link';
const ContainerRegister = (props) => (
    <div class="containerRegister">
        <p>ตั้งแต่วันที่</p>
        <h1>{props.data.duration}</h1>
        <Link href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/">
            <a><button class="btnRegister">ลงทะเบียน เฟส 2<br />ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br />(จำกัดขำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)</button><hr/></a>
        </Link>
    </div>
)

export default ContainerRegister
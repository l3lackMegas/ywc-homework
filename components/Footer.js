import Link from 'next/link';
const Footer = (props) => (
    <div class="Footer">
        <div class="ft1">
            <div class="box-detail">
                <div class="flexContent">
                    <div class="col"><img class="logo" src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"/></div>
                    <div class="col">
                        <div class="head">ข้อมูลลงทะเบียนประชาชน</div>
                        <div class="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span class="nowrap">“เป๋าตัง”</span> และ <span class="nowrap">“ถุงเงิน”</span></div>
                        <div class="detail">ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a class="ml-1" href="tel:021111144"><span class="nowrap">0 2111 1144</span></a></div>
                    </div>
                    <div class="col">
                        <div class="head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
                        <div class="detail">เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
                        <div class="detail">ติดต่อ โทร.<a class="ml-1" href="tel:022706400"><span class="nowrap">0 2270 6400 กด 7</span></a></div>
                    </div>
                    <div class="col">
                        <div class="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
                        <div class="detail">ติดต่อ ททท.</div>
                        <div class="detail">โทร<a class="ml-1" href="tel:1672"><span>1672</span></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ft2">
        <div class="box-detail">
            <div class="flexContent">
                <p class="copyright">Copyright © 2003-2019</p>
                <ul>
                    <li>
                        <Link href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/">
                            <a class="aFooter">ลงทะเบียนเข้าร่วมมาตรการ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register">
                            <a class="aFooter">ขั้นตอนการเข้าร่วมทั้งหมด</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province">
                            <a class="aFooter">รายชื่อร้านค้าที่เข้าร่วมรายการ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
)

export default Footer
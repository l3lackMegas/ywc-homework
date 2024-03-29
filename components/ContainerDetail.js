const ContainerDetail = (props) => (
    <div className="ContainerDetail">
        <div className="box-contain">
            <h1>มาตรการส่งเสริมการบริโภค<br/>ในประเทศ “ชิมช้อปใช้”</h1>
            <div className="detail"dangerouslySetInnerHTML={{ __html: props.data.detail }} />
            <h3>เงื่อนไขการเข้าร่วมมาตรการ</h3>
            <div className="detail ul mt-2">
                1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br/>
                2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br/>
                3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
            </div>
        </div>
    </div>
)

export default ContainerDetail
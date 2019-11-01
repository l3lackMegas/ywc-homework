const HeaderMobile = (props) => (
    <div className="navBarMobile">
        <a href="#" className="navbar-brand" href="#"><img src="https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"/></a>
        <div id="nav-icon1" toggle="0" onClick={(e) => {
            let isOn = document.getElementById('nav-icon1').getAttribute("toggle")
            if (isOn == 0) {
                document.getElementById('nav-icon1').classList.add('open')
                document.getElementById('mobileMenu').classList.add('open')
                document.getElementById('nav-icon1').setAttribute("toggle", "1")
            } else {
                document.getElementById('nav-icon1').classList.remove('open')
                document.getElementById('mobileMenu').classList.remove('open')
                document.getElementById('nav-icon1').setAttribute("toggle", "0")
            }
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="mobileMenu">
            <ul>
                {props.data.map((item, key) => (
                    <li key={key}>
                        <a href={item.href} className="aNavMobile">{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default HeaderMobile
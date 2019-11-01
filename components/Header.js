const Header = (props) => (
    <div className="navBar">
        <ul>
            {props.data.map((item, key) => (
                <li key={key}>
                    <a href={item.href} className="aNavbar">{item.label}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default Header
import Link from 'next/link'
const style = {
    navBar: {
        position: 'fixed',
        width: '100%',
        height: '60px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
        zIndex: 100
    },

    ul: {
        margin: '0 auto',
        padding: '5px 0 0 0',
        width: '100%',
        listStyle: 'none',
        textAlign: 'center'
    },

    li: {
        display: 'inline-block',
        padding: '14px 15px'
    }
}

const Header = (props) => (
    <div style={style.navBar}>
        <ul style={style.ul}>
            {props.data.map(item => (
                <li style={style.li}>
                    <Link href={item.href}>
                        <a class="aNavbar" style={style.a}>{item.label}</a>
                    </Link>
                </li>
            ))}
        </ul>
  </div>
)

export default Header
import {Link} from 'react-router-dom';
 
const Header=()=>{
    return(<div >
            <ul style={{
                textDecoration:'none',
                display:'flex'

            }}>
                <li style={{
                listStyle:'none',
                marginRight:'4px'

            }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{
                listStyle:'none',
                marginRight:'4px'

            }}>
                    <Link to="/about">About us</Link>
                </li>
            </ul>
    </div>)
}

export default Header;
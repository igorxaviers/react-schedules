import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className='d-flex justify-content-between bg-dark align-items-center text-white py-2 px-4'>
        <Link to={'/'}><h1>Calendary</h1></Link>

        <ul className='d-flex list-unstyled'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/schedule'>schedule</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;
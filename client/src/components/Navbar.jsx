import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className='d-flex justify-content-between align-items-center text-white py-4 px-md-5 px-2 px-md-5'>
        <Link to={'/'}><h1 className='fw-bolder fs-3'>Calendary</h1></Link>

        <ul className='d-flex list-unstyled mb-0'>
            <li className='btn btn-light me-3'><Link to='/'>Home</Link></li>
            <li className='btn btn-light me-3'><Link to='/search'>Search</Link></li>
            <li className='btn btn-light '><Link to='/schedule'>New Schedule</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/login';
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("user logOut")
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }
    const mainMenu = <React.Fragment>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/appointment'}>Apponitment</Link></li>
        <li><Link to={'/reviews'}>Reviews</Link></li>
        <li><Link to={'/contact'}>Contacts Us</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <button onClick={handleLogOut} className='btn btn-primary text-white'>Sign Out</button>
                </>
                :
                <>
                    <li><Link to={'/login'}>Login</Link></li>
                </>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {mainMenu}
                    </ul>
                </div>
                <Link to='/' className='text-xl'>Doctors Portal</Link>
            </div>
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {mainMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
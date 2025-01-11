'use client'
// import React, { useState } from 'react';
import Link from 'next/link';
import '../Shared/Style/Style.css'
import { TiShoppingCart } from "react-icons/ti";
// import { NavLink, useNavigate } from 'react-router-dom';
import { usePathname } from 'next/navigation'

import { CiMenuBurger } from "react-icons/ci";
import { MdDashboardCustomize, MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';
import HeaderSocial from './SocialHeader';
// import { signOut } from 'firebase/auth';
// import toast from 'react-hot-toast';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init'
// import Loader from './Loader';
// import useRole from '../../Hooks/useRole';

const Header = () => {
    let [toggle, setToggle] = useState(false);
    // const [user, loading] = useAuthState(auth);
    // let [role, roleLoading] = useRole(user)
    const pathname = usePathname()
    // let navigat = useNavigate();

    // console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigat('/login')
                toast.success('Logout Succes!')
                localStorage.removeItem('accessToken')
            })
    }

    // if (loading) {
    //     return <Loader></Loader>
    // }
    // console.log(pathname);
    return (
        <div className='header-container  fixed top-0 w-full'>
            <HeaderSocial></HeaderSocial>
            <nav
                className='flex bg-orange-500 text-white py-4  items-start  md:justify-between md:px-16 px-5 md:items-center'
            >
                {/* {
                    user &&
                    <label htmlFor="dashboard-drower" tabIndex="1" className="md:hidden absolute left-6  top-[22px]">
                        <MdDashboardCustomize className='h-5 w-5'></MdDashboardCustomize>
                    </label>
                } */}
                {/* <img className='sm:w-52 w-48' src={logo} alt="" /> */}
                <h2 className=' text-2xl  tracking-wide headerLogo'>Mzaman</h2>

                <span onClick={navBtnHndle} className='md:hidden cursor-pointer absolute right-6 text-xl top-[20px]'>{toggle ? <MdOutlineClose /> : <CiMenuBurger />}</span>
                {/* <MdOutlineClose></MdOutlineClose>
                <CiMenuBurger></CiMenuBurger> */}

                <ul onClick={navBtnHndle} className={`headerUL flex flex-col text-center md:justify-center z-10  md:flex-row md:top-0 left-0 w-full md:relative md:opacity-100  absolute  py-4 md:py-0 duration-500 ${toggle ? " opacity-100 visible  top-14" : " top-[-250px] opacity-0 invisible"} sm:visible`}>
                    <li className="">
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={"/"}>Home</Link>
                    </li>

                    <li className="">
                        <Link className={`link ${pathname === '/liveCourse' ? 'active' : ''}`} href={"/liveCourse"}>Live Course</Link>
                    </li>


                    <li className="">
                        <Link className={`link ${pathname === '/recordedCours' ? 'active' : ''}`} href={"/recordedCours"}>Recorded Course</Link>
                    </li>
                    <li className="">
                        <Link className={`link ${pathname === '/digitalProduct' ? 'active' : ''}`} href={"/digitalProduct"}>Digital Product</Link>
                    </li>
                    <li className="">
                        <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href={"/contact"}>Contact</Link>
                    </li>
                    {/* <li className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')}>
                        <Link href={"/dashboard"}>Dashboard</Link>
                    </li> */}
                    {/* {
                        user && <>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/dashboard"}>Dashboard</NavLink>

                        </>
                    } */}



                    {/* {
                        user && <>


                            {
                                role === "admin" &&
                                <>
                                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/createOrder"}>Create Order</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/bookingEntry"}>Entry</NavLink>
                                </>
                            }

                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/searchByDate"}>Search by Date</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/singleSearch"}>Search by ID</NavLink>

                            {
                                role === "admin" &&
                                <>
                                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/addMemo"}>Add Memo</NavLink>

                                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/dashboard"}>Dashboard</NavLink>


                                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/manageUsers"}>Manage Users</NavLink>
                                </>
                            }
                        </>
                    }




                    {user ?
                        // <button onClick={handleLogout} className='uppercase my-0.5 md:my-0 text-left   mx-auto md:mx-0 md:pb-0.5' >LogOut</button>
                        <NavLink onClick={handleLogout} className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>LogOut</NavLink>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    } */}
                </ul>
                <div className='flex justify-center items-center'>
                    <button className='text-2xl'>
                        <TiShoppingCart />
                    </button>
                    <button className='px-2 w-20 py-1.5 ml-3 rounded-md bg-white text-orange-500'>Sign in</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
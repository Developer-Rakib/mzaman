'use client'
// import React, { useState } from 'react';
import Link from 'next/link';
import '../Shared/Style/Style.css'
import { TiShoppingCart } from "react-icons/ti";
// import { NavLink, useNavigate } from 'react-router-dom';
import { usePathname } from 'next/navigation'
import { RiArrowDropDownLine } from "react-icons/ri";
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
    let [liveDropdownToggle, setLiveDropdownToggle] = useState(false);
    let [recordedDropdownToggle, setRecordedDropdownToggle] = useState(false);
    // const [user, loading] = useAuthState(auth);
    // let [role, roleLoading] = useRole(user)
    const pathname = usePathname()
    // let navigat = useNavigate();

    // console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    // const handleDropdown = () => {
    //     const dropdown = document.getElementById('dropdownMenu');
    //     dropdown.style.display = 'none';
    // }

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
    // console.log(recordedDropdownToggle);
    return (
        <div className='header-container  fixed top-0 w-full'>
            <HeaderSocial></HeaderSocial>
            <nav
                className='flex bg-orange-500 text-white py-3  items-start  md:justify-between md:px-16 px-5 md:items-center'
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

                    {/* live courses */}

                    <li className="dropdownMenuParent cursor-pointer relative flex items-center">
                        <Link
                            // onClick={() => {
                            //     setLiveDropdownToggle(!liveDropdownToggle)
                            //     setRecordedDropdownToggle(false)
                            // }}
                            className={`link ${pathname === '/liveCourses' ? 'active' : ''}`} href={"/"}>Live Courses</Link>
                        {/* ${!liveDropdownToggle && 'hidden'} */}
                        <RiArrowDropDownLine className='text-2xl' />
                        <ul id='dropdownMenu' className={`dropdownMenu absolute top-[24px]  left-0 bg-orange-600 w-64 text-left px-8 py-5
                            `}>
                            <Link className={`link ${pathname === '/msOfficeCourse' ? 'active' : ''}`} href={"/msOfficeCourse"}>MS Office Course</Link>
                            <Link className={`link ${pathname === '/msExcelCourse' ? 'active' : ''}`} href={"/msExcelCourse"}>MS Excel Course</Link>
                            <Link className={`link ${pathname === '/powerQuery' ? 'active' : ''}`} href={"/powerQuery"}>Power BI and Query</Link>
                            <Link className={`link ${pathname === '/corporateExcel' ? 'active' : ''}`} href={"/corporateExcel"}>Corporate Excel Training</Link>
                            <Link className={`link ${pathname === '/exclusiveSoloCourse' ? 'active' : ''}`} href={"/exclusiveSoloCourse"}>Exclusive Solo Course</Link>
                        </ul>
                    </li>

                    {/* MS Office Course
                    MS Excel Course
                    Excel for Adv. Users
                    PowerPoint Course
                    MS Word Course */}

                    {/* Recorded Course */}

                    <li className="relative cursor-pointer flex items-center dropdownMenuParent">
                        <Link
                            // onClick={() => {
                            //     setRecordedDropdownToggle(!recordedDropdownToggle)
                            //     setLiveDropdownToggle(false)
                            // }}
                            className={` link ${pathname === '/recordedCourses' ? 'active' : ''}`} href={"/"}>Recorded Course</Link>

                        {/* ${!recordedDropdownToggle && 'hidden'} */}
                        <RiArrowDropDownLine className='text-2xl' />

                        <ul className={`dropdownMenu absolute top-[24px]  left-0 bg-orange-600 w-64 text-left px-8 py-5 `}>
                            <Link className={`link ${pathname === '/msOfficeCourse' ? 'active' : ''}`} href={"/msOfficeCourse"}>MS Office Course</Link>
                            <Link className={`link ${pathname === '/msExcelCourse' ? 'active' : ''}`} href={"/msExcelCourse"}>MS Excel Course</Link>
                            <Link className={`link ${pathname === '/excelAdvance' ? 'active' : ''}`} href={"/excelAdvance"}>Excel for Adv. Users</Link>
                            <Link className={`link ${pathname === '/powerPoint' ? 'active' : ''}`} href={"/powerPoint"}>PowerPoint Course</Link>
                            <Link className={`link ${pathname === '/msWord' ? 'active' : ''}`} href={"/msWord"}>MS Word Course</Link>
                        </ul>
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
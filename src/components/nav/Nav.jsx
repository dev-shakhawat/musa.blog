import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';


// slices
import { menuToggle } from '../../redux/slices/togglemenuSlice';

// icons
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdArrowForwardIos } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FcSettings } from "react-icons/fc";
import { RiNotification4Fill } from "react-icons/ri";
import { TbMailForward } from "react-icons/tb";

export const Nav = () => {

    const isMenuOpen = useSelector(state => state.togglemenu.value)
    const dispatch = useDispatch();
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const searchRef = React.useRef(null);


    // menu hide
    const menuHide = () => {
        dispatch(menuToggle(false))
    }

    // menu 
    const menuShow = () => {
        dispatch(menuToggle(true))
    }


    // search bar
    const searchShow = () => {
        setIsSearchOpen(true)
    }
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
  return (
    <nav className='flex justify-between items-center px-3 py-5 shadow-md  '>
        
        {/* logo/menu bar */}
        <div className="flex items-center gap-2 ">
            { isMenuOpen ? 
                <CgMenuLeftAlt onClick={()=>menuHide()} className='text-2xl cursor-pointer' /> :
                < MdArrowForwardIos onClick={()=>menuShow()} className='text-2xl cursor-pointer'/>
             }
            <Link to="/">
                <h1 className='text-xl font-bold'>Logo</h1>
            </Link>
        </div>


        {/* search bar */}
        <div ref={searchRef} className="flex items-center gap-2 lg:w-1/4 w-2/5 relative   ">
            <input onClick={()=>searchShow()} type="search" placeholder='search' className='border p-2 rounded-[50px] w-full outline-none border-gray-400/50 pl-10 bg-white     ' />
            <IoSearchOutline className='absolute left-3 text-2xl text-gray-400' />

            {isSearchOpen && 
            <div  className={`absolute top-[-5px] left-[50%] translate-x-[-50%] w-[110%] bg-green-100 z-[-1] transition-[.4s] rounded-md h-[500px] ${isSearchOpen ? 'block   ' : 'hidden'}   `}></div>}
        </div>


        {/* profile */}
        <div className="flex items-center space-x-4">
        <button className="flex items-center bg-[#00B39F] text-white text-sm font-semibold rounded-full px-4 py-2 gap-2 hover:bg-[#00997f] cursor-pointer">
          <TbMailForward className='text-lg'/>
          Invite
        </button>
        <button type='button'><FcSettings className='text-2xl' /></button>
        <button type='button'><RiNotification4Fill className='text-2xl' /></button>
        <img alt="User profile picture, person with short hair wearing a light gray top, background yellow" className="w-8 h-8 rounded-full object-cover" height="32" src="https://storage.googleapis.com/a1aa/image/326f3ad4-9473-4568-3005-e64b1a01a66d.jpg" width="32" />
      </div>


    </nav>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';



// icons
import { GoHome } from "react-icons/go";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { List } from '../list/List';
import { AiFillProduct } from "react-icons/ai";
import { AiOutlineDotChart } from "react-icons/ai";

export const Menu = () => {

    const isMenuOpen = useSelector(state => state.togglemenu.value)
    const menuItems = [
        {name: isMenuOpen && 'All Post', icon: <MdAlignHorizontalLeft className='text-2xl ml-2 '/>},
        {name: isMenuOpen && 'All Pages', icon: <IoDocumentsOutline className='text-2xl ml-2 '/>},
    ]
    const menuMedium = [
        {name: isMenuOpen && 'Hudai', icon: <AiFillProduct className='text-2xl ml-2 '/>},
        {name: isMenuOpen && 'Kiso na', icon: <AiOutlineDotChart className='text-2xl ml-2 '/>},
    ]
    
  return (
    <div className={` p-2 duration-[.4s] ${isMenuOpen ? 'w-[250px]' : 'w-[60px]'} border-r border-gray-200 h-screen overflow-hidden   `}>
        <Link to="/" className='py-3  bg-[#00B39F] flex items-center gap-3 text-white font-semibold rounded-md ' ><GoHome className='text-2xl ml-2 '/>{isMenuOpen ? 'Home' : ''}</Link>

        <div className="mt-5">
            <List arr={menuItems} liststyle="py-3  w-[250px]  hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-3" boxstyle="text-gray-500  " />
            <hr className='opacity-10 my-2 '/>
            <List arr={menuMedium} liststyle="py-3  w-[250px] hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-3" boxstyle="text-gray-500" />
        </div>
    </div>
  )
}

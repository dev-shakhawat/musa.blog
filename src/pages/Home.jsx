import React from 'react'
import { Nav } from '../components/nav/Nav'
import { Menu } from '../components/menu/Menu'

export const Home = () => {
  return (
    <div>
      <Nav/>
      <div className="flex">
        <Menu/> 
        <div className="p-3">Home</div>
      </div>
    </div>
  )
}

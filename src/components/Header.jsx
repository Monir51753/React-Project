import React from 'react'
import "../scss/header.scss"
import Nav from '../components/Nav'
import Shop_now_btn from '../components/Shop_now_btn'

const Header = () => {
  return (
    <div>
        <header className="App-header">
            <h1 className='logo'>Gadget Shop</h1>
            <Nav />
            <Shop_now_btn />
        </header>
    </div>
  )
}

export default Header
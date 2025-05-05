import { configureStore } from '@reduxjs/toolkit'

// slices
import menuToggle from './slices/togglemenuSlice'

export default configureStore({
  reducer: {
    togglemenu: menuToggle
  }
})
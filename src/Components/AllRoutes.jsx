import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../Pages/Post'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/reels' element={<Posts/>}/>
            <Route path='/tagged' element={<Posts/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
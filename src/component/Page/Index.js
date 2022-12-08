import React from 'react'
import Login from '../back-end/login'
import { AuthProvide } from '../back-end/context/AuthProvide'
import {Route, Routes} from 'react-router-dom'
import PostsUseHook from '../back-end/Redux-2/PostsUseHook'
export default function Index() {
  return (
    <div>
        {/* <AuthProvide> */}
    <Routes>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/PostsUseHook' element={ <PostsUseHook/>}/>
    </Routes>
        {/* </AuthProvide> */}
    </div>
  )
}

import React from 'react'
import "./Home.css"
import Header from '../../Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
function Home() {
  return (<>

    <Header/>
    <div className='home'>
    <Posts/>
    <Sidebar/>
    </div></>
  )
}
//min 19:44
export default Home

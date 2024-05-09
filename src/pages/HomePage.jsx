import React from 'react'
//components
import Sidebar from '../components/templates/Sidebar'
import Main from '../components/templates/Main'

const style = {display:"flex"} 

function HomePage() {
  return (
    <div style={style}>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default HomePage
import React from 'react'
import TopLoadingBar from './Toploadingbar'


export default function Layout ({ content, length }) {
  return (
    <div>
      {/* {<TopLoadingBar length={length}/>} */}
      {content}
    </div>
  )
}

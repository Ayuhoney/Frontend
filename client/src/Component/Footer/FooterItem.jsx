import React from 'react'

const FooterItem = ({items}) => {
  return (
    <>
        {items.map((e,index)=>(
            <a href='/' key={index}>{e}</a>
        ))}
    </>
  )
}

export default FooterItem
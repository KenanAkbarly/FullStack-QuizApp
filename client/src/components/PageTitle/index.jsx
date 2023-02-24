import React from 'react'
import { useSelector } from 'react-redux'

const PageTitle = ({title}) => {
  const {mode} = useSelector((state)=> state.darkMode)
  return (
    <div>
        <h1
        style={mode? {color:'#253858'}:{color:'#264e93'}}
        >{title}</h1>
    </div>
  )
}

export default PageTitle
import React from 'react'
import {toggleDarkMode} from '../.././redux/darkModeSlice/darkModeSlice'
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import './style.scss'
const Switchh = () => {
  const dispatch = useDispatch();

  return (
    <div>
        <div
    className="switch"
    onClick={()=> dispatch(toggleDarkMode())}
  >
     <img
      className="switch__moon"
      src="	https://dev-jobs-site.netlify.app/assets/desktop/icon-moon.svg"
      alt="moon"
    />
    <div >
      <div className="switch__root__circle" />
      <Switch color="default"  defaultChecked />
    </div>
     <img
      className="switch__sun"
      src="https://dev-jobs-site.netlify.app/assets/desktop/icon-sun.svg"
      alt="sun"
    />
  </div>
    </div>
  )
}

export default Switchh
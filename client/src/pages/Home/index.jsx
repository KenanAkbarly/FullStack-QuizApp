import React from 'react'

// window.location.href = 
const Home = () => {
  return (
    <div>Home
      <button
      onClick={()=> {window.location.href = '/login'}}
      >
        login  
      </button>
      <button  onClick={()=>{window.location.href = '/register'}}>
        register
      </button>
    </div>
  )
}
export default Home
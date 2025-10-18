import { useState } from 'react'
import './App.css'
// import { useSelector } from 'react-redux'
// import { increase, decrease } from './store/authSlice'
// import { useDispatch } from 'react-redux'

function App() {
  // const count = useSelector((state) => state.auth.value)
  // const dispatch = useDispatch();

  return (
    <>
      <div>
        count is {}
      </div>
      <div>
        <button>
          increase
        </button>
        <button>
          decrease 
        </button>
      </div>
    </>
  )
}

export default App

import './App.css'
import authService from './appwrite/auth'
import { useRef, useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { increase, decrease } from './store/authSlice'
// import { useDispatch } from 'react-redux'

function App() {
  const [data, setdata] = useState({email : "", password : "", name : ""})
  // const count = useSelector((state) => state.auth.value)
  // const dispatch = useDispatch();

  // authService.createAccount({})

  const handleSubmit = (e) => {
    console.log("Data : ", data)

    // authService.createAccount(data)
  }


  return (
    <>
      <div>
        <input placeholder='Name' value={data.name} onChange={(e) => setdata({...data, name : e.target.value})} type="text" />
        <input placeholder='Email' value={data.email} onChange={(e) => setdata({...data, email : e.target.value})} type="email"/>
        <input placeholder='Password' value={data.password} onChange={(e) => setdata({...data, password : e.target.value})} type="password" />
      </div>
      <div>
        <button onClick={handleSubmit}>
          Submitt
        </button>
        {/* <button>
          decrease 
        </button> */}
      </div>
    </>
  )
}

export default App

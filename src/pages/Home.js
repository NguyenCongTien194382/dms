import React from 'react'
import { useAuth } from '../contexts/authContext'
import Login from '../components/Login/Login'
import ListDevice from '../components/ListDevice/ListDevice'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const { userLoggedIn } = useAuth()
  return (
    <>
      {userLoggedIn ? (
        <div className="main">
          <Navbar />
          <div className="content">
            <Header />
            <ListDevice />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Home
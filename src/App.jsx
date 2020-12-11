import React from 'react'
import GreetingInput from './components/GreetingInput'
import DisplayGreeting from './components/DisplayGreeting'
import DispalyUsers from './components/DispalyUsers'
import Header from './components/Header'
import Authentication from './components/Authentication'
import { useSelector } from 'react-redux'

const App = () => {
  const auth = useSelector(state => state.auth)
  return (
    <>
      <Header />
      <Authentication />
      <DispalyUsers />
      {/* <DisplayGreeting />
      <GreetingInput /> */}
      { auth &&
        <p data-cy="flash-message">
          {auth.message}
        </p>
      }
    </>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const currentUser = useSelector(state => state.currentUser)
  return (
    <>
      {/* {currentUser ?
        <h3 data-cy="header-user-email">Logged in as {currentUser.email}</h3> :
        <h3>You are not logged in</h3>
      } */}

      <h3 data-cy="header-user-email">
        {currentUser ?
          `Logged in as ${currentUser.email}` :
          "You are not logged in"
        }
      </h3>
    </>
  )
}

export default Header

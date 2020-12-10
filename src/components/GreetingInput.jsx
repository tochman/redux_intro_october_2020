import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const GreetingInput = () => {
  const dispatch = useDispatch()
  const [newMessage, setNewMessage] = useState()
  return (
    <>
      <input
        placeholder="Type your new greeting here"
        onBlur={(event) => setNewMessage(event.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "TEST", payload: newMessage })}

      >Change
      </button>
    </>
  )
}

export default GreetingInput

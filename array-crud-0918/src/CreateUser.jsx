import React from 'react'

const CreateUser = ({id, username, email, active}) => {
  return (
    <div style={{padding:"30px", borderBottom:"1px dotted #333"}}>{id}번. {username}님. {email} </div>
  )
}

export default CreateUser
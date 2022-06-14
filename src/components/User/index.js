/* eslint-disable react/prop-types */
import React from 'react'

function User({ data }) {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.age}</div>
      <div>{data.collection_time}</div>
    </div>
  )
}

export default User

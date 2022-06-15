/* eslint-disable react/prop-types */
import React from 'react'
import { Title } from '../reusable/Layout'

function User({ data }) {
  return (
    <>
      <Title>{data.name}</Title>
      <div>
        <span>{data.gender === 'F' ? 'Female, ' : 'Male, '}</span>
        <span>{data.age} years old</span>
      </div>
      <div>{data.email}</div>
      <div>Collection Time: {data.collection_time}</div>
      <div>Resulted Time: {data.resulted_time}</div>
    </>
  )
}

export default User

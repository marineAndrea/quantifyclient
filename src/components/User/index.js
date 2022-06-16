/* eslint-disable react/prop-types */
import React from 'react'
import { Title, GridContainer, Label } from '../reusable/Layout'
import { formatTime } from '../../utils'

function User({ data }) {
  return (
    <>
      <Title>{data.name}</Title>
      <div>
        <Label>{data.gender === 'F' ? 'Female, ' : 'Male, '}</Label>
        <Label>{data.age} years old</Label>
      </div>
      <div>{data.email}</div>
      <GridContainer style={{ gridTemplateColumns: '120px auto' }}>
        <div>Collection Time:</div>
        <div>{formatTime(data.collectionTime)}</div>
      </GridContainer>
      <GridContainer style={{ gridTemplateColumns: '120px auto' }}>
        <div>Resulted Time:</div>
        <div>{formatTime(data.resultedTime)}</div>
      </GridContainer>
    </>
  )
}

export default User

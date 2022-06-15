/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import LevelChart from '../reusable/LevelChart'
import { LayeredTile, GridContainer, Subtitle, Label } from '../reusable/Layout'

function Parameters({ biomarkerData, wearableData }) {
  const getUserRange = (result, ranges) => {
    if (!result || !ranges) {
      return null
    }
    return ranges.outOfRange && result >= ranges.optimal[0] && result <= ranges.optimal[1]
      ? 'Optimal'
      : ranges.inRange && result >= ranges.inRange[0] && result <= ranges.inRange[1]
      ? 'In Range'
      : ranges.optimal && result >= ranges.outOfRange[0] && result <= ranges.outOfRange[1]
      ? 'Out Of Range'
      : null
  }
  return (
    <GridContainer>
      <div>
        <Subtitle>Biomarkers</Subtitle>
        {biomarkerData.map((d) => {
          const userRange = getUserRange(d.result, d.ranges)
          return (
            <LayeredTile key={d.label}>
              <div>
                <Label>{d.label}: </Label>
                <span>{d.result} </span>
                <span>{d.unit} </span>
                <span style={{ fontWeight: 'bold' }}>{userRange}</span>
              </div>
              <LevelChart ranges={d.ranges} result={d.result} />
            </LayeredTile>
          )
        })}
      </div>
      <div>
        <Subtitle>Wearables</Subtitle>
        {biomarkerData.map((d) => {
          const userRange = getUserRange(d.result, d.ranges)
          return (
            <LayeredTile key={d.label}>
              <div>
                <Label>{d.label}: </Label>
                <span>{d.result} </span>
                <span>{d.unit} </span>
                <span style={{ fontWeight: 'bold' }}>{userRange}</span>
              </div>
              <LevelChart ranges={d.ranges} result={d.result} />
            </LayeredTile>
          )
        })}
      </div>
    </GridContainer>
  )
}

export default Parameters

/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import LevelChart from '../reusable/LevelChart'
import { LayeredTile, GridContainer, Subtitle, Label } from '../reusable/Layout'
import { getUserRange } from '../../utils'

function Parameters({ biomarkerData, wearableData }) {
  console.log({ biomarkerData })
  return (
    <GridContainer>
      {[biomarkerData, wearableData].map((data, i) => {
        return (
          <div key={data}>
            <Subtitle>{i === 0 ? 'Biomarkers' : i === 1 ? 'Wearables' : ''}</Subtitle>
            {data.map((d) => {
              if (d.result === null) {
                return <div>{d.label || null} Data are missing</div>
              }

              const userRange = getUserRange(d.result, d.ranges)

              return (
                <LayeredTile key={d.label}>
                  <div>
                    <Label>{d.label}</Label>
                    <span>{`: ${userRange}`}</span>
                  </div>
                  <LevelChart
                    ranges={d.ranges}
                    result={d.result}
                    unit={d.unit}
                    comparisonPoint={d.otherScores ? d.otherScores[0] : null}
                    userRange={userRange}
                  />
                </LayeredTile>
              )
            })}
          </div>
        )
      })}
    </GridContainer>
  )
}

export default Parameters

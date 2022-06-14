/* eslint-disable react/prop-types */
import React from 'react'
import LevelChart from '../reusable/LevelChart'

function Parameters({ biomarkerData, wearableData }) {
  console.log({ wearableData })
  return (
    <div>
      <div>
        <div>Biomarkers</div>
        {biomarkerData.map((d) => {
          return (
            <div key={d.label}>
              <div>{d.simpleLabel}</div>
              <div>
                <span>{d.result}</span>
                <span>{d.unit}</span>
              </div>
              <LevelChart ranges={d.ranges} result={d.result} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Parameters

/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import LevelChart from '../reusable/LevelChart'
import { LayeredTile, GridContainer, Title, Label } from '../reusable/Layout'
import { getUserRange, camelCaseToLabel } from '../../utils'
import { COLOR_MAP } from '../../consts'

function Parameters({ biomarkerData, wearableData }) {
  const filteredBiomarkerData = biomarkerData.filter((d) => d.result !== null)
  const missingBiomarkerData = biomarkerData.filter((d) => d.result === null)
  const orderedBiomarkerData = filteredBiomarkerData.concat(missingBiomarkerData)
  const filteredWearableData = wearableData.filter((d) => d.result !== null)
  const missingWearableData = wearableData.filter((d) => d.result === null)
  const orderedWearableData = filteredWearableData.concat(missingWearableData)

  return (
    <GridContainer>
      {[orderedBiomarkerData, orderedWearableData].map((data, i) => {
        return (
          <div key={data}>
            <Title>{i === 0 ? 'Biomarkers' : i === 1 ? 'Wearables' : ''}</Title>

            {data.map((d, index) => {
              if (
                (i === 0 && missingBiomarkerData.length && index === data.length - 1) ||
                (i === 1 && missingWearableData.length && index === data.length - 1)
              ) {
                return (
                  <div key={d.label} style={{ fontSize: '18px', paddingTop: '18px' }}>
                    If data that your device should collect is missing, please contact
                    support@getquantify.io to troubleshoot your wearable connection.
                  </div>
                )
              }

              if (d.result === null) {
                return (
                  <div key={d.label} style={{ padding: '2px 0' }}>
                    No {d.label || null} Data
                  </div>
                )
              }

              const userRange = getUserRange(d.result, d.ranges)

              if (index === data.length - 1 && i === 0) {
                return (
                  <div key={d.label}>
                    <GridContainer style={{ gridTemplateColumns: 'repeat(3, 108px)' }}>
                      {Object.entries(COLOR_MAP).map(([key, val]) => {
                        return (
                          <div key={key}>
                            <span
                              style={{
                                display: 'inline-block',
                                width: '20px',
                                height: '3px',
                                background: val,
                                marginRight: '5px',
                              }}
                            />
                            <span>{camelCaseToLabel(key)}</span>
                          </div>
                        )
                      })}
                    </GridContainer>
                  </div>
                )
              }

              return (
                <LayeredTile key={d.label}>
                  <div>
                    <Label>{d.label}</Label>
                    {userRange && <span style={{ fontSize: '16px' }}>{`: ${userRange}`}</span>}
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

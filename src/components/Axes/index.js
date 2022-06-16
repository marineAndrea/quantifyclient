/* eslint-disable react/prop-types */
import React from 'react'
import LollipopChart from '../reusable/LollipopChart'
import { GridContainer } from '../reusable/Layout'

function Axes({ data }) {
  const biomkData = data.filter((d) => {
    return d.category === 'biomarker'
  })
  const wearbData = data.filter((d) => {
    return d.category === 'wearable'
  })
  return (
    <GridContainer>
      <div>
        <LollipopChart data={biomkData} showAxis={false} />
      </div>
      <div>
        <LollipopChart data={wearbData} showAxis />
      </div>
    </GridContainer>
  )
}

export default Axes

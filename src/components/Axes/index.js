/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
// import useD3 from '../reusable/Hooks'
import LollipopChart from '../reusable/LollipopChart'
import { LayeredTile, GridContainer, Subtitle, Label } from '../reusable/Layout'
import { GROUPED_AXES } from '../../consts'

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
        <LollipopChart data={biomkData} />
      </div>
      <div>
        <LollipopChart data={wearbData} />
      </div>
    </GridContainer>
  )
}

export default Axes

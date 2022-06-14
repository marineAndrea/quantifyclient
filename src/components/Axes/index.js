/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
// import useD3 from '../reusable/Hooks'

const height = 500
const width = 500
const margin = {
  left: 20,
  top: 20,
  right: 20,
  bottom: 20,
}
const barWidth = 10
const colorMap = {
  optimal: 'green',
  inRange: 'blue',
  outOfRange: 'orange',
}

function Axes({ data }) {
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, width - (margin.left + margin.right)])

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, height - (margin.top + margin.bottom)])

  const plotArea = (
    <rect
      x={xScale(0)}
      width={xScale(data.length) - xScale(0)}
      y={0}
      height={yScale(100)}
      fill="gray"
    />
  )

  const bars = data.map((d, i) => {
    return (
      <rect
        key={d.axis}
        x={xScale(i)}
        width={barWidth}
        y={yScale(100) - yScale(d.result)}
        height={yScale(d.result)}
        fill="blue"
      />
    )
  })

  return (
    <svg
      style={{
        width,
        height,
        background: 'black',
      }}
    >
      <g transform={`translate(${margin.left},${margin.top})`}>
        {plotArea}
        {bars}
      </g>
    </svg>
  )
}

export default Axes

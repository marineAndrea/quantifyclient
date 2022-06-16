/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
import useD3 from '../Hooks/useD3'
import { Svg } from '../Layout'

const height = 60
const width = 400
const margin = {
  left: 10,
  top: 10,
  right: 10,
  bottom: 10,
}

const barWidth = 8

function LollipopChart({ data }) {
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, width - (margin.left + margin.right)])

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, height - (margin.top + margin.bottom)])

  const plotArea = (
    <g transform="translate(0,0)">
      <rect
        x={xScale(0)}
        width={xScale(data.length) - xScale(0)}
        y={0}
        height={yScale(100)}
        fill="#181818"
      />
    </g>
  )

  const bars = data.map((d, i) => {
    return (
      <g key={d.axis} transform={`translate(${width / data.length / 2},0)`}>
        <rect
          x={xScale(i)}
          width={barWidth}
          y={yScale(100) - yScale(d.result)}
          height={yScale(d.result)}
          fill="blue"
        />
        {/* <text key={d} x={xScale(i)} y={0} fill="white" fontSize={10} textAnchor="middle">
          {d.axis}
        </text> */}
      </g>
    )
  })

  const axis = data.map((d, i) => {
    return (
      <g key={d.axis} transform={`translate(${width / data.length / 2},${height - margin.bottom})`}>
        <text key={d} x={xScale(i)} y={0} fill="white" fontSize={10} textAnchor="start">
          {d.axis}
        </text>
      </g>
    )
  })

  return (
    <Svg
      style={{
        width,
        height,
      }}
    >
      <g transform={`translate(${margin.left},${margin.top})`}>
        {plotArea}
        {bars}
        {axis}
      </g>
    </Svg>
  )
}

export default LollipopChart

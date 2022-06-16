/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
import useD3 from '../Hooks/useD3'
import { Svg } from '../Layout'

const height = 200
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
    .range([height - (margin.top + margin.bottom), 0])

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
          y={yScale(0) - yScale(d.result)}
          height={yScale(d.result)}
          fill="blue"
        />
        {/* <text key={d} x={xScale(i)} y={0} fill="white" fontSize={10} textAnchor="middle">
          {d.axis}
        </text> */}
      </g>
    )
  })

  const axisBar = data.map((d, i) => {
    return (
      <g key={d.axis} transform={`translate(${width / data.length / 2},${height - margin.bottom})`}>
        <text key={d} x={xScale(i)} y={0} fill="white" fontSize={10} textAnchor="start">
          {d.axis}
        </text>
      </g>
    )
  })

  const tickValue = [...Array(10).keys()].map((v) => v * 10)
  const yAxis = (
    <g>
      <line x1="0" y1={yScale(0)} x2="2" y2={yScale(100)} stroke="white" strokeWidth={1} />
      {tickValue.map((t) => (
        <line key={t} x1="-2" y1={yScale(t)} x2="0" y2={yScale(t)} stroke="white" strokeWidth={1} />
      ))}
    </g>
  )

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
        {axisBar}
        {yAxis}
      </g>
    </Svg>
  )
}

export default LollipopChart

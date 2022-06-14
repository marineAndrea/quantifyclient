/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
import useD3 from '../Hooks/useD3'

const height = 50
const width = 300
const margin = {
  left: 10,
  top: 20,
  right: 10,
  bottom: 20,
}
const barHeight = 10
const colorMap = {
  optimal: 'green',
  inRange: 'blue',
  outOfRange: 'orange',
}

const tranformData = (ranges) => {
  return [
    {
      start: ranges.outOfRange[0],
      end: ranges.outOfRange[1],
      color: colorMap.outOfRange,
    },
    {
      start: ranges.inRange[0],
      end: ranges.inRange[1],
      color: colorMap.inRange,
    },
    {
      start: ranges.optimal[0],
      end: ranges.optimal[1],
      color: colorMap.optimal,
    },
  ]
}

function LevelChart({ ranges, result }) {
  const flattenArray = Object.values(ranges).flat(2)
  const min = Math.min(...flattenArray)
  const max = Math.max(...flattenArray)
  const rangeData = tranformData(ranges)
  const xScale = d3
    .scaleLinear()
    .domain([d3.min(rangeData, (d) => d.start), d3.max(rangeData, (d) => d.end)])
    .range([0, width - (margin.left + margin.right)])

  const plotArea = (
    <rect x={xScale(min)} width={xScale(max) - xScale(min)} y={0} height={barHeight} fill="gray" />
  )

  const axis = (
    <g transform={`translate(0,${height - margin.bottom})`}>
      {[min, max].map((d) => (
        <text key={d} x={xScale(d)} y={0} fill="white" fontSize={10} textAnchor="middle">
          {d}
        </text>
      ))}
    </g>
  )

  const sections = rangeData.map((d) => {
    return (
      <rect
        key={d.color}
        x={xScale(d.start)}
        width={xScale(d.end) - xScale(d.start)}
        y={0}
        height={barHeight}
        fill={d.color}
      />
    )
  })

  const resultDot = (
    <g>
      <circle cx={xScale(result)} cy={height / 2 - margin.top} r={barHeight / 2} fill="red" />
      {/* <text
        x={xScale(result)}
        y={height - margin.bottom}
        fill="white"
        fontSize={10}
        textAnchor="middle"
      >
        {result}
      </text> */}
    </g>
  )

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
        {axis}
        {sections}
        {resultDot}
      </g>
    </svg>
  )
}

export default LevelChart

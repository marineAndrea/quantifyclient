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
const barHeight = 8
const dotRadius = barHeight / 2 + 2
const colorMap = {
  optimal: 'lightseagreen',
  inRange: 'cornflowerblue',
  outOfRange: 'coral',
}
const userDotColor = 'whitesmoke'

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
    .range([margin.left, width - margin.right])

  const plotArea = (
    <g transform={`translate(0,${height / 2 - barHeight / 2})`}>
      <rect
        x={xScale(min)}
        width={xScale(max) - xScale(min)}
        y={0}
        height={barHeight}
        fill="white"
      />
    </g>
  )

  const sections = rangeData.map((d) => {
    return (
      <g
        key={`${d.color}-${d.start}-${d.end}`}
        transform={`translate(0,${height / 2 - barHeight / 2})`}
      >
        <rect
          x={xScale(d.start)}
          width={xScale(d.end) - xScale(d.start)}
          y={0}
          height={barHeight}
          fill={d.color}
        />
      </g>
    )
  })

  const resultDot = (
    <g transform={`translate(0,${height / 2})`}>
      <circle cx={xScale(result)} cy={0} r={dotRadius} fill={userDotColor} />
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

  const axis = (
    <g transform={`translate(0,${height - margin.bottom})`}>
      {[min, max].map((d, i) => (
        <text
          key={d}
          x={xScale(d)}
          y={0}
          fill="white"
          fontSize={10}
          textAnchor={i === 0 ? 'start' : 'end'}
        >
          {d}
        </text>
      ))}
    </g>
  )

  return (
    <Svg
      style={{
        width,
        height,
        overflow: 'visible',
      }}
    >
      <g>
        {plotArea}
        {sections}
        {resultDot}
        {axis}
      </g>
    </Svg>
  )
}

export default LevelChart

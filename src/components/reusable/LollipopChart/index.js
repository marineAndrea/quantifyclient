/* eslint-disable react/prop-types */
import React from 'react'
import * as d3 from 'd3'
import { Svg } from '../Layout'
import { PERCENTILE_COLOR_MAP, HIGHLIGHTED_TEXT_COLOR, DEFAULT_TEXT_COLOR } from '../../../consts'

const height = 280
const width = 400
const margin = {
  left: 10,
  top: 30,
  right: 10,
  bottom: 40,
}

const barWidth = 2

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
        y={yScale(100)}
        height={yScale(0) - yScale(100)}
        fill="gray"
      />
    </g>
  )

  const bars = data.map((d, i) => {
    // eslint-disable-next-line no-unused-vars
    const resultColor = Object.entries(PERCENTILE_COLOR_MAP).filter(([key, val]) => {
      return d.result >= val[0] && d.result <= val[1]
    })[0][0]

    return (
      <g
        key={d.axis}
        transform={`translate(${xScale(data.length) / data.length / 2},${yScale(100)})`}
      >
        <rect
          x={xScale(i) - barWidth / 2}
          width={barWidth}
          y={-yScale(d.result)}
          height={yScale(d.result)}
          fill={DEFAULT_TEXT_COLOR}
        />
        <circle cx={xScale(i)} cy={-yScale(d.result)} r={5} fill={resultColor} strokeWidth="3" />
        <text
          x={xScale(i)}
          y={-yScale(d.result) - 10}
          fill={HIGHLIGHTED_TEXT_COLOR}
          fontSize={16}
          textAnchor="middle"
        >
          {d.result}
        </text>
        <text
          key={d}
          x={xScale(i)}
          y={20}
          fill={HIGHLIGHTED_TEXT_COLOR}
          fontSize={16}
          textAnchor="middle"
        >
          {d.axis}
        </text>
      </g>
    )
  })

  // const tickValues = [...Array(11).keys()].map((v) => v * 10)
  // const yAxis = showAxis ? (
  //   <g transform={`translate(${margin.left},0)`}>
  //     <line x1="0" y1={yScale(0)} x2="2" y2={yScale(100)} stroke={HIGHLIGHTED_TEXT_COLOR} strokeWidth={1} />
  //     {tickValues.map((t) => (
  //       <line key={t} x1="-2" y1={yScale(t)} x2="0" y2={yScale(t)} stroke={HIGHLIGHTED_TEXT_COLOR} strokeWidth={1} />
  //     ))}
  //   </g>
  // ) : null

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
        {/* {yAxis} */}
      </g>
    </Svg>
  )
}

export default LollipopChart

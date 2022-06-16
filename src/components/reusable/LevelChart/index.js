/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import * as d3 from 'd3'
import { Svg } from '../Layout'
import { tranformParametersData, camelCaseToLabel } from '../../../utils'

const height = 120
const width = 400
const margin = {
  left: 0,
  top: 10,
  right: 0,
  bottom: 30,
}
const barHeight = 8
const dotRadius = barHeight / 2 + 2
const userDotColor = 'WhiteSmoke'

function LevelChart({ ranges, result, unit, comparisonPoint, userRange }) {
  const [sectionShown, setSectionShown] = useState(false)

  if (!ranges) {
    return null
  }

  const flattenArray = Object.values(ranges).flat(2)
  if (flattenArray.length === 0) {
    return null
  }

  const rangeData = tranformParametersData(ranges, userRange)
  const min = d3.min(rangeData, (d) => d.start)
  const max = d3.max(rangeData, (d) => d.end)
  const xScale = d3
    .scaleLinear()
    .domain([min, max])
    .range([margin.left, width - margin.right])

  const plotArea = (
    <g transform={`translate(0,${-barHeight / 2})`}>
      <rect
        x={xScale(min)}
        width={xScale(max) - xScale(min)}
        y={0}
        height={barHeight}
        fill="#121212"
      />
    </g>
  )

  const sections = rangeData.map((d, i) => {
    return (
      <g
        key={`${d.color}-${d.start}-${d.end}`}
        transform={`translate(0,${-barHeight / 2})`}
        onMouseEnter={() => setSectionShown(i)}
        onMouseLeave={() => setSectionShown(false)}
      >
        <rect
          x={xScale(d.start)}
          width={xScale(d.end) - xScale(d.start)}
          y={0}
          height={barHeight}
          fill={d.color}
          opacity={sectionShown === i ? 1 : 0.9}
        />
      </g>
    )
  })

  const resultDot = result ? (
    <g>
      <circle cx={xScale(result)} cy={0} r={dotRadius} fill={userDotColor} strokeWidth="3" />
      <text
        x={xScale(result)}
        y={-barHeight * 2}
        fill={userDotColor}
        fontSize={11}
        fontWeight="bold"
        textAnchor="middle"
      >
        {`${result} ${unit}`}
      </text>
    </g>
  ) : null

  const comparisonDot =
    comparisonPoint && comparisonPoint.score && comparisonPoint.comparison ? (
      <g>
        <circle cx={xScale(comparisonPoint.score)} cy={0} r={dotRadius - 2} fill={userDotColor} />
        <text
          x={xScale(comparisonPoint.score)}
          y={barHeight * 2}
          fill={userDotColor}
          fontSize={9}
          textAnchor="middle"
        >
          {`${comparisonPoint.comparison}: ${comparisonPoint.score}`}
        </text>
      </g>
    ) : null

  const axis = (
    <g>
      {[min, max].map((d, i) => (
        <text
          key={d}
          x={xScale(d)}
          y={barHeight * 2}
          fill="white"
          fontSize={10}
          textAnchor={i === 0 ? 'start' : 'end'}
        >
          {d}
        </text>
      ))}
    </g>
  )

  const legend = (
    <g transform={`translate(0,${height - margin.bottom})`}>
      {Object.entries(ranges).map(([key, value], i) => (
        <g key={`${key}-${value}`}>
          <text
            x={0}
            y={i * 16}
            fill="white"
            fontSize={10}
            textAnchor="start"
            fontWeight={sectionShown === i ? 'bold' : 'normal'}
          >
            {camelCaseToLabel(key)}:
          </text>
          <text
            x={80}
            y={i * 16}
            fill="white"
            fontSize={10}
            textAnchor="start"
            fontWeight={sectionShown === i ? 'bold' : 'normal'}
          >
            {`[${value[0]}, ${value[1]}]`}
          </text>
        </g>
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
        <g transform={`translate(0,${height / 3 + margin.top})`}>
          {plotArea}
          {sections}
          {comparisonDot}
          {resultDot}
          {axis}
        </g>
        {legend}
      </g>
    </Svg>
  )
}

export default LevelChart

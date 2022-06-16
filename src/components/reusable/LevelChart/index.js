/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import * as d3 from 'd3'
import { Svg } from '../Layout'
import { tranformParametersData, camelCaseToLabel } from '../../../utils'
import { HIGHLIGHTED_TEXT_COLOR } from '../../../consts'

const height = 60
const width = 400
const margin = {
  left: 0,
  top: 18,
  right: 0,
  bottom: 10,
}
const barHeight = 8
const dotRadius = barHeight / 2 + 2

function LevelChart({ ranges, result, unit }) {
  const [sectionHighlighted, setSectionHightlight] = useState(false)

  const flattenArray = Object.values(ranges || []).flat(2)
  if (flattenArray.length === 0) {
    return null
  }

  const rangeData = tranformParametersData(ranges)
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

  const sections = rangeData.map((d) => {
    return (
      <g
        key={`${d.color}-${d.start}-${d.end}`}
        transform={`translate(0,${-barHeight / 2})`}
        onMouseEnter={() => {
          if (d.start !== min || d.end !== max) setSectionHightlight(d.label)
        }}
        onMouseLeave={() => setSectionHightlight(false)}
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

  const resultDot = result ? (
    <g>
      <circle
        cx={xScale(result)}
        cy={0}
        r={dotRadius}
        fill={HIGHLIGHTED_TEXT_COLOR}
        strokeWidth="3"
      />
      <text
        x={xScale(result)}
        y={-barHeight * 2}
        fill={HIGHLIGHTED_TEXT_COLOR}
        fontSize={13}
        fontWeight="bold"
        textAnchor="middle"
      >
        {`${result} ${unit}`}
      </text>
    </g>
  ) : null

  // const comparisonDot =
  //   comparisonPoint && comparisonPoint.score && comparisonPoint.comparison ? (
  //     <g>
  //       <circle
  //         cx={xScale(comparisonPoint.score)}
  //         cy={0}
  //         r={dotRadius - 2}
  //         fill={HIGHLIGHTED_TEXT_COLOR}
  //       />
  //     </g>
  //   ) : null

  const axis = (
    <g>
      {[min, max].map((d, i) => {
        if (sectionHighlighted === false) {
          return (
            <text
              key={d}
              x={xScale(d)}
              y={barHeight * 2}
              fill={HIGHLIGHTED_TEXT_COLOR}
              fontSize={10}
              textAnchor={i === 0 ? 'start' : 'end'}
            >
              {d}
            </text>
          )
        }
        return null
      })}
      {['inRange', 'optimal'].map((s) => {
        if (
          ranges[s] &&
          ranges[s][0] !== null &&
          ranges[s][1] !== null &&
          sectionHighlighted === camelCaseToLabel(s)
        ) {
          return (
            <g key={s}>
              <text
                x={xScale(ranges[s][0])}
                y={barHeight * 2}
                fill={HIGHLIGHTED_TEXT_COLOR}
                fontSize={10}
                textAnchor="middle"
              >
                {ranges[s][0]}
              </text>
              <text
                x={xScale(ranges[s][1])}
                y={barHeight * 2}
                fill={HIGHLIGHTED_TEXT_COLOR}
                fontSize={10}
                textAnchor="middle"
              >
                {ranges[s][1]}
              </text>
            </g>
          )
        }
        return null
      })}
    </g>
  )

  // const legend = (
  //   <g transform={`translate(0,${height + 30})`}>
  //     <text x={0} y={0} fill={defaultColor} fontSize={11} textAnchor="start" fontWeight="bold">
  //       {strToLabel(comparisonPoint.comparison)}:
  //     </text>
  //     <text x={80} y={0} fill={defaultColor} fontSize={11} textAnchor="start" fontWeight="bold">
  //       {comparisonPoint.score} {unit}
  //     </text>
  //     {Object.entries(ranges).map(([key, value], i) => {
  //       if (key === 'outOfRange') return null
  //       return (
  //         <g key={`${key}-${value}`}>
  //           <text
  //             x={xScale(max) - 80}
  //             y={i * 16}
  //             fill={defaultColor}
  //             fontSize={11}
  //             textAnchor="end"
  //             fontWeight="bold"
  //           >
  //             {camelCaseToLabel(key)}:
  //           </text>
  //           <text
  //             x={xScale(max)}
  //             y={i * 16}
  //             fill={defaultColor}
  //             fontSize={11}
  //             textAnchor="end"
  //             fontWeight="bold"
  //           >
  //             {`[${value[0]}, ${value[1]}]`}
  //           </text>
  //         </g>
  //       )
  //     })}
  //   </g>
  // )

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
          {resultDot}
          {axis}
        </g>
        {/* {legend} */}
      </g>
    </Svg>
  )
}

export default LevelChart

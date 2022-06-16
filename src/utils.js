/* eslint-disable no-nested-ternary */
import * as d3 from 'd3'
import { COLOR_MAP } from './consts'

const formatTime = (iso) => {
  return d3.timeFormat('%d-%b-%y %H:%M %p')(new Date(iso))
}

const strToLabel = (str) => {
  const arr = str.split(' ').map((w) => {
    return `${w.charAt(0).toUpperCase()}${w.slice(1)}`
  })
  return arr.join(' ')
}

const camelCaseToLabel = (str) => {
  const text = str.replace(/([A-Z])/g, ' $1')
  return strToLabel(text)
}

const tranformParametersData = (ranges) => {
  const transformedData = []
  if (ranges.outOfRange[0] !== null && ranges.outOfRange[1] !== null) {
    transformedData.push({
      start: ranges.outOfRange[0],
      end: ranges.outOfRange[1],
      color: COLOR_MAP.outOfRange,
      label: camelCaseToLabel('outOfRange'),
    })
  }
  if (ranges.inRange[0] !== null && ranges.inRange[1] !== null) {
    transformedData.push({
      start: ranges.inRange[0],
      end: ranges.inRange[1],
      color: COLOR_MAP.inRange,
      label: camelCaseToLabel('inRange'),
    })
  }
  if (ranges.optimal[0] !== null && ranges.optimal[1] !== null) {
    transformedData.push({
      start: ranges.optimal[0],
      end: ranges.optimal[1],
      color: COLOR_MAP.optimal,
      label: camelCaseToLabel('optimal'),
    })
  }

  return transformedData
}

const getUserRange = (result, ranges) => {
  if (result === null || !ranges) {
    return null
  }
  return ranges.optimal.length === 2 && result >= ranges.optimal[0] && result <= ranges.optimal[1]
    ? 'optimal'
    : ranges.inRange.length === 2 && result >= ranges.inRange[0] && result <= ranges.inRange[1]
    ? 'inRange'
    : ranges.outOfRange.length === 2 &&
      result >= ranges.outOfRange[0] &&
      result <= ranges.outOfRange[1]
    ? 'outOfRange'
    : ''
}

export { formatTime, strToLabel, camelCaseToLabel, tranformParametersData, getUserRange }

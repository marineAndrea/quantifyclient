/* eslint-disable no-nested-ternary */
import * as d3 from 'd3'
import { COLOR_MAP } from './consts'

const tranformParametersData = (ranges, userRange) => {
  const transformedData = []
  if (ranges.outOfRange[0] !== null && ranges.outOfRange[1] !== null) {
    transformedData.push({
      start: ranges.outOfRange[0],
      end: ranges.outOfRange[1],
      color: COLOR_MAP.outOfRange,
      opacity: userRange === 'Out Of Range' ? 1 : 1,
    })
  }
  if (ranges.inRange[0] !== null && ranges.inRange[1] !== null) {
    transformedData.push({
      start: ranges.inRange[0],
      end: ranges.inRange[1],
      color: COLOR_MAP.inRange,
      opacity: userRange === 'In Range' ? 1 : 1,
    })
  }
  if (ranges.optimal[0] !== null && ranges.optimal[1] !== null) {
    transformedData.push({
      start: ranges.optimal[0],
      end: ranges.optimal[1],
      color: COLOR_MAP.optimal,
      opacity: userRange === 'Optimal Range' ? 1 : 1,
    })
  }

  return transformedData
}

const getUserRange = (result, ranges) => {
  if (!result || !ranges) {
    return null
  }
  return ranges.outOfRange && result >= ranges.optimal[0] && result <= ranges.optimal[1]
    ? 'Optimal'
    : ranges.inRange && result >= ranges.inRange[0] && result <= ranges.inRange[1]
    ? 'In Range'
    : ranges.optimal && result >= ranges.outOfRange[0] && result <= ranges.outOfRange[1]
    ? 'Out Of Range'
    : null
}

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

export { tranformParametersData, getUserRange, formatTime, strToLabel, camelCaseToLabel }

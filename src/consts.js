const GROUPED_AXES = {
  biomarkers: ['inflammation', 'metabolic', 'hormonal'],
  wearables: ['activity', 'sleep', 'heart'],
}

const COLOR_MAP = {
  optimal: 'lightseagreen',
  inRange: 'cornflowerblue',
  outOfRange: 'coral',
}

const PERCENTILE_COLOR_MAP = {
  lightseagreen: [85, 100],
  cornflowerblue: [60, 85],
  coral: [0, 60],
}

const DEFAULT_TEXT_COLOR = ' #faf7f7'
const HIGHLIGHTED_TEXT_COLOR = 'white'

export { GROUPED_AXES, COLOR_MAP, PERCENTILE_COLOR_MAP, DEFAULT_TEXT_COLOR, HIGHLIGHTED_TEXT_COLOR }

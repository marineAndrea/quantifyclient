/* eslint-disable react/jsx-indent */
import React from 'react'
import User from './components/User'
import Axes from './components/Axes'
import Parameters from './components/Parameters'
import data from './data'

function App() {
  if (
    !data.axes ||
    !data.biomarker ||
    !data.biomarker.spotClientData ||
    !data.biomarker.spotBiomarkerData ||
    !data.wearable
  ) {
    return null
  }

  return (
    <>
      <User data={data.biomarker.spotClientData} />
      <Axes data={data.axes} />
      <Parameters biomarkerData={data.biomarker.spotBiomarkerData} wearableData={data.wearable} />
    </>
  )
}

export default App

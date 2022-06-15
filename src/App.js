/* eslint-disable react/jsx-indent */
import React from 'react'
import { useParams } from 'react-router-dom'
import User from './components/User'
import Axes from './components/Axes'
import Parameters from './components/Parameters'
import data from './data'
import { Page, Tile, LayeredTile, Title } from './components/reusable/Layout'

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

  const params = useParams()
  console.log({ params })

  return (
    <Page>
      <Tile>
        <User data={data.biomarker.spotClientData} />
      </Tile>
      <Tile>
        <Title>Axes Of Wellness</Title>
        <LayeredTile>
          <Axes data={data.axes} />
        </LayeredTile>
      </Tile>
      <Tile>
        <Title>Parameters</Title>
        <Parameters biomarkerData={data.biomarker.spotBiomarkerData} wearableData={data.wearable} />
      </Tile>
    </Page>
  )
}

export default App

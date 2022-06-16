/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import User from './components/User'
import Axes from './components/Axes'
import Parameters from './components/Parameters'
import { Page, Tile, LayeredTile, Title } from './components/reusable/Layout'

function App() {
  const [data, setData] = useState({})
  const { search } = useLocation()
  const shopifyID = new URLSearchParams(search).get('shopifyID')
  const spotID = new URLSearchParams(search).get('spotID')
  const dateStart = new URLSearchParams(search).get('dateStart')
  const dateEnd = new URLSearchParams(search).get('dateEnd')
  const baseURL = `http://localhost:3000/api?shopifyID=${shopifyID}&spotID=${spotID}&dateStart=${dateStart}&dateEnd=${dateEnd}`

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error.response)
      })
  }, [baseURL])

  if (!data) {
    return null
  }

  return (
    <Page>
      {data.client && (
        <Tile>
          <User data={data.client} />
        </Tile>
      )}
      {data.axes && (
        <Tile>
          <Title>Axes Of Wellness</Title>
          <LayeredTile>
            <Axes data={data.axes} />
          </LayeredTile>
        </Tile>
      )}
      {data.biomarker && data.wearable && (
        <Tile>
          <Parameters biomarkerData={data.biomarker} wearableData={data.wearable} />
        </Tile>
      )}
    </Page>
  )
}

export default App

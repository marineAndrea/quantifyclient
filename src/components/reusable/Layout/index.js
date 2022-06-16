import styled from 'styled-components'

const Page = styled.div`
  background: #202020;
  margin: 0;
  padding: 12px;
  color: #faf7f7;
`

const Tile = styled.div`
  background: #101010;
  margin: 12px;
  padding: 24px;
`

const LayeredTile = styled.div`
  background: #181818;
  margin: 36px 0;
  padding: 12px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 50px;
  row-gap: 50px;
`

const Title = styled.h1`
  font-size: 26px;
  margin: 18px 0;
  color: white;
`

const Subtitle = styled.h2`
  font-size: 20px;
  margin: 16px 0;
  color: white;
`

const Label = styled.h5`
  display: inline;
  font-size: 16px;
  line-height: 42px;
  margin: 12px 0;
  color: white;
`

const Svg = styled.svg`
  overflow: 'visible';
`

export { Page, Tile, LayeredTile, GridContainer, Title, Subtitle, Label, Svg }

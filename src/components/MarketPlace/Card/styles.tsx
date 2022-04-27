import styled from 'styled-components'

export const Container = styled.div`
  margin: 15px 0px;

  @media (min-width: 576px) {
    margin: 15px;
  }

  @media (min-width: 768px) {
    margin: 15px 30px;
  }
`

export const InnerContainer = styled.div`
  background-color: rgb(255 255 255 / 7%);
  border-radius: 23px;
  padding: 15px;
  height: 100%;

  @media (min-width: 768px) {
    padding: 25px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    background: linear-gradient(267.06deg, #A7D0F4 19.05%, #1D85E3 97.04%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    margin: 0px;
  }
  img {
    min-width: 26px;
    max-width: 30px;
    margin-right: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 30px);
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const ChartWrapper = styled.div`
  width: 150px;
  margin-right: 15px;
`

export const CardInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    height: 30px;
    margin-top: 10;
    &:first-child {
      padding: 5px 17px;
      margin-right: 10px;
    }
    &:last-child {
      border-radius: 50%;
      width: 30px;
      padding: 5px;
      background-color: rgb(247 247 247 / 4%);
    }
  }
`

export const Table = styled.table`
  width: 100%;
  margin-bottom: 15px;
`

export const Tbody = styled.tbody`
  tr {
    td {
      font-size: 12px;
      color:  rgb(255 255 255 / 80%);
      &:last-child {
        text-align: right;
      }
    }
  }
`


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
  background-color: #ffffff08;
  border-radius: 23px;
  padding: 15px;

  @media (min-width: 768px) {
    padding: 25px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 12px;
    h2, p {
      margin: 0px;
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-transform: uppercase;
    }
    p {
      font-weight: 500;
      font-size: 12px;
      text-transform: uppercase;
      background: linear-gradient(267.62deg, #82BCEF 0.27%, #1780E0 103.16%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
`

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 13px;
    font-weight: 400;
    font-size: 16px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
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

  @media (min-width: 993px) {
    width: 120px;
  }

  @media (min-width: 1200px) {
    width: 150px;
  }
`

export const CardInfoWrapper = styled.div`
  flex: 1;
`

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const TotalSupply = styled.div`
  .title {
    color: rgb(255 255 255 / 40%);
    font-size: 12px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 6px;
  }
  .value {
    font-weight: 400;
    font-size: 12px;
    font-weight: 400;
    margin: 0px;
  }
`

export const Country = styled.div`
  p {
    color: rgb(255 255 255 / 40%);
    font-size: 12px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 6px;
  }
`

export const Available = styled.div`
  p {
    color: rgb(255 255 255 / 40%);
    font-size: 12px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 3px;
  }

  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 12px;
      color: #6CFF6C;
      margin-right: 5px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 14px;

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

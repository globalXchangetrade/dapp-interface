import styled from 'styled-components'

export const Container = styled.div`
  padding: 45px 0px;
`

export const InnerContainer = styled.div`
  max-width: 1500px;
  margin: 0px auto;
  padding: 0px 15px;

  @media (min-width: 768px) {
    padding: 0px 30px;
  }
`

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 27px;
  padding: 12px 15px;
  background: linear-gradient(440.31deg, #2B2263 7.82%, #6D24E4 91.92%);
  flex-direction: column;

  @media (min-width: 576px) {
    padding: 16px 30px;
    flex-direction: row;
  }
`

export const PriceBox = styled.div`
  span {
    font-weight: 400;
    font-size: 13px;
    color: #FFFFFF;
    opacity: 0.4;
  }
`

export const PriceContent = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  font-weight: 700;
  font-size: 38px;
  text-transform: uppercase;

  span {
    margin-top: 8px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.66);
  }
`

export const ProgressBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;

  @media (min-width: 576px) {
    margin: 0px 10px;
  }
`

export const ProgressTextWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    opacity: 0.4;
  }

  p {
    font-weight: 800;
    font-size: 25px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const RightPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const LimitWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 15px;
`

export const InfoItem = styled.div`
  display: flex;

  span {
    &.title {
      font-size: 12px;
      color: #FFFFFF;
      opacity: 0.4;
      margin-right: 5px;
    }

    &.value {
      font-weight: 600;
      font-size: 12px;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  > div {
    width: 100%;
  }

  @media (min-width: 576px) {
    margin-left: -15px;
    width: calc(100% + 30px);
    > div {
      margin: 15px;
      width: calc(50% - 30px);
    }
  }
`

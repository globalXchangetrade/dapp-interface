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
  background-color: rgba(200, 200, 200, 0.07);
  border-radius: 23px;
  padding: 10px 15px;

  @media (min-width: 768px) {
    padding: 16px 25px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 30px;
  }

  > div {
    margin-left: 5px;
    h2, p {
      margin: 0px;
      text-transform: uppercase;
    }
    h2 {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }
    p {
      color: #E0E0E0;
      font-weight: 500;
      font-size: 12px;
    }
  }
`

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 16px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;

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
  position: relative;
  padding: 15px 0px;
  height: 100%;
  display: flex;
  align-items: center;

  > button {
    z-index: 999;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 25px;
    height: 25px;
    padding: 0px;
  }

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
    color: rgba(197, 197, 198, 0.4);
    font-size: 12px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 5px;
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
    color: rgba(197, 197, 198, 0.4);
    font-size: 12px;
    font-weight: 400;
    margin-top: 0px;
    margin-bottom: 5px;
  }
`

export const Available = styled.div`
  p {
    color: rgba(197, 197, 198, 0.4);
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
    height: 37px;
    margin-top: 10px;
    &:first-child {
      padding: 5px 17px;
      margin-right: 6px;
      max-width: 147px;
      width: calc(100% - 44px);
    }
    &:last-child {
      width: 38px;
      padding: 5px;
    }
  }
`

export const Divider = styled.div`
  margin-left: -15px;
  width: calc(100% + 30px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.06);

  @media (min-width: 768px) {
    margin-left: -25px;
    width: calc(100% + 50px);
  }
`

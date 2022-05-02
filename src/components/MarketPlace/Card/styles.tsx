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
  height: 100%;

  @media (min-width: 768px) {
    padding: 16px 25px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;

  > span {
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 21px;

    > span {
      margin-left: 5px;
      color: rgba(255, 255, 255, 0.66);
      font-weight: 600;
      font-size: 12px;
      margin-top: 4px;
    }
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
  padding-top: 5px;

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
  padding: 20px 0px;
  height: 100%;
  display: flex;
  align-items: center;

  > button {
    z-index: 999;
    position: absolute;
    right: 10px;
    top: 20px;
    width: 25px;
    height: 25px;
    padding: 0px;
  }
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

export const Table = styled.table`
  width: 100%;
  margin-bottom: 15px;
`

export const Tbody = styled.tbody`
  tr {
    td {
      font-size: 12px;
      &:first-child {
        color: rgba(255, 255, 255, 0.94);
        opacity: 0.8;
      }
      &:last-child {
        text-align: right;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.88);
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 5px;

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


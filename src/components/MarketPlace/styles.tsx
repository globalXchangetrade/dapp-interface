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

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  @media (min-width: 576px) {
    > div {
      flex-direction: row;
      align-items: center;
    }
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
  }
`

export const SelectWrapper = styled.div`
  margin-left: 0px;
  display: flex;
  align-items: center;
  padding: 3px 0px 3px 13px;
  border-radius: 17.5px;
  background: linear-gradient(458deg,rgb(72 163 246 / 10%) 9.22%,rgb(23 128 224 / 10%) 83.63%);
  height: 35px;
  > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 11px;
    color: #FFFFFF;
    opacity: 0.3;
  }
  #select-input {
    background: transparent !important;
    #list {
      margin-top: 10px;
      > div {
        padding: 5px 10px;
      }
    }
  }

  @media (min-width: 576px) {
    margin-left: 22px;
  }
`

export const CurrencyFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  > button {
    margin-left: 6px;
    border-radius: 50%;
    padding: 0px;
    width: 40px;
    height: 40px;
    > svg {
      font-size: 20px;
    }
  }

  @media (min-width: 576px) {
    margin-top: 0px;
  }
`

export const UpcomingWrapper = styled.div`
  margin-top: 50px;

  > h1 {
    font-weight: 600;
    font-size: 19px;
    line-height: 21px;
    text-transform: uppercase;
    margin: 0px;
  }
`

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  width: 100%;
  > div {
    width: 100%;
  }

  @media (min-width: 576px) {
    margin-left: -15px;
    width: calc(100% + 30px);
    > div {
      width: calc(50% - 30px);
    }
  }

  @media (min-width: 768px) {
    margin-left: -30px;
    width: calc(100% + 60px);
    > div {
      width: calc(50% - 60px);
    }
  }

  @media (min-width: 993px) {
    > div {
      width: calc(33.33% - 60px);
    }
  }
`

export const MarketCardListWrapper = styled.div`
  margin-top: 20px;
  > h1 {
    font-weight: 600;
    font-size: 19px;
    line-height: 21px;
    text-transform: uppercase;
    margin: 0px;
  }
`

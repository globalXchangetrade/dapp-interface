import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;

  > button {
    width: 100%;
    height: 44px;
    margin-top: 20px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  > img {
    width: 30px;
    margin-right: 8px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
  }
`

export const InfoItem = styled.div`
  padding: 3px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    &:first-child {
      opacity: 0.6;
      margin-right: 5px;
      svg {
        margin-left: 10px;
      }
    }
  }
`

export const SelectWrapper = styled.div`
  border: 0.8px solid rgba(255, 255, 255, 0.22);
  border-radius: 11px;
  height: 34px;
  display: flex;
  align-items: center;
  padding-left: 12px;

  > span {
    font-weight: 500;
    font-size: 12px;
  }

  #select-input {
    background-color: transparent;
  }
`

export const CurrencyWrapper = styled.div`
  #select-input {
    background-color: transparent;
    > div {
      &:first-child {
        padding: 0px;
      }
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;

  > span {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    color: white;
    margin-left: 6px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`

export const CalendarWrapper = styled.div`
  .ordering-calendar-btn {
    padding: 5px 0px;
  }
`

export const ChartWrapper = styled.div`
  h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    margin: 0px 0px 10px 0px;
  }
`

export const ChartContent = styled.div`
  display: flex;
  justify-content: center;
  > div {
    max-width: 160px;
    width: 100%;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;

  > button {
    height: 44px;
    width: 100%;
    margin-top: 15px;
  }
`

export const SelectWrapper = styled.div`
  #select-input {
    background-color: transparent;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: white;
    margin: 0px 7px;
  }

  img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
  }
`

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 6%);
  border-radius: 11px;
  height: 52px;
  margin-top: 15px;
  padding: 5px 15px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    &:first-child {
      font-weight: 400;
      font-size: 16px;
      color: rgba(255, 255, 255, 255, 30%);
    }
    &:last-child {
      font-weight: 400;
      font-size: 10px;
      margin-left: 10px;
    }
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    margin-right: 7px;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
  }
`

export const TextRightSide = styled.p`
  font-weight: 500;
  font-size: 10px;
  text-align: right;
  margin: 5px 15px 0px 0px;
`

export const PlusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    font-size: 18px;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

export const Tbody = styled.tbody`
  tr {
    td {
      font-weight: 400;
      font-size: 13px;
      padding: 6px 0px;
      &:first-child {
        color: rgba(255, 255, 255, 60%);
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`

export const InsufficientWrapper = styled.div`
  > p {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    margin: 10px 0px
  }
`

export const InsufficientItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  justify-content: space-between;

  button {
    padding: 0px;
    width: 68px;
    height: 24px;
    font-size: 8px;
    font-weight: 600;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background: #C4C4C4;
    margin-right: 10px;
  }

  span {
    font-weight: 400;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }
`

export const CurrencySupplyWrapper = styled.div`
  > p {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    margin: 10px 0px
  }
`
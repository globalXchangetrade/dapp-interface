import styled from 'styled-components'

export const Container = styled.div`
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
  position: relative;
  min-width: 250px;
  width: 100%;
  > div {
    width: 100%;
  }

  button {
    position: absolute;
    right: 5px;
    height: 30px;
    padding: 0px 12px;
    border-radius: 10px;
  }

  input {
    padding-right: 85px;
  }

  @media (min-width: 576px) {
    min-width: 300px;
  }
`

export const SelectWrapper = styled.div`
  margin-left: 0px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: 39px;
  background: #26272B;
  #select-input {
    background: transparent !important;
    min-width: 70px;
    #list {
      margin-top: 10px;
      > div {
        padding: 5px 10px;
      }
    }
  }

  @media (min-width: 576px) {
    margin-left: 10px;
  }
`

export const CurrencyFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  > button {
    margin-left: 6px;
    padding: 0px;
    width: 40px;
    height: 39px;
    > svg {
      font-size: 20px;
    }
  }

  @media (min-width: 576px) {
    margin-top: 0px;
  }
`

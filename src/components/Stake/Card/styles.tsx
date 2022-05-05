import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(255, 255, 255, 7%);
  border-radius: 25px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px 10px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);

  > img {
    width: 30px;
    margin-right: 12px;
  }
  span {
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  padding: 10px 25px 30px 25px;

  > button {
    width: 100%;
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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  button {
    margin-bottom: 17px;
    width: 100%;
    height: 38px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    button {
      width: 48%;
      height: 38px;
    }
  }
`

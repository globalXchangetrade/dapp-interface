import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
  background: linear-gradient(167.08deg, #111216 7.54%, #111216 56.49%);

  > p {
    font-weight: 400;
    font-size: 13px;
    margin: 0px;
    &.bold {
      font-weight: 500;
    }
  }

  button {
    margin-top: 20px;
    height: 44px;
    padding: 0px 15px;
    width: 100%;
    border-radius: 11px;
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
      padding: 6px 0px;
      &:first-child {
        opacity: 0.6;
        font-weight: 400;
        font-size: 13px;
      }
      &:last-child {
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
`

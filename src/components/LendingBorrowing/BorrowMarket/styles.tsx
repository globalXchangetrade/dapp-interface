import styled, { css } from 'styled-components'

export const Container = styled.div`

`

export const TableWrapper = styled.div`
  background: rgb(255 255 255 / 3%);
  border-radius: 23px;
  padding-top: 15px;
  overflow: auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 400px;
  th, td {
    padding: 14px 25px;
    text-align: left;
  }
`

export const Thead = styled.thead`
  tr {
    th {
      font-weight: 500;
      font-size: 14px;
      text-transform: capitalize;
      color: #FFFFFF;
      opacity: 0.6;
    }
  }
`

interface TbodyProps {
  readonly activeColor?: boolean;
};

export const Tbody = styled.tbody<TbodyProps>`
  tr {
    td {
      button {
        min-width: 100px;
        height: 34px;
        padding: 0px 12px;
      }
    }
  }
  ${(props: any) => props.activeColor && css`
    td {
      background-color: rgb(196 196 196 / 4%);
    }
  `};
`

export const AssetsWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 14px;
  }
`
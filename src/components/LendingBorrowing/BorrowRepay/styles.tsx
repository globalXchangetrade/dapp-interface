import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(167.08deg, #111216 7.54%, #111216 56.49%);
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;

  img {
    width: 33px;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 17px;
    text-transform: uppercase;
  }
`

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  padding: 10px 25px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  input {
    border: none;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    width: 100px;
    color: rgb(255 255 255 / 20%);
    border-bottom: 1px solid #938CFD;
    outline: none;
    background: transparent;
  }

  span {
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
  }
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(196 196 196 / 5%);
  position: relative;
`

interface TabProps {
  readonly active: boolean;
}
export const Tab = styled.div<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  width: 50%;
  padding: 7px 15px;
  cursor: pointer;
  position: relative;

  span {
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.4;
  }

  ${(props: any) => props.active && css`
    span {
      opacity: 1;
    }
  `};
`

export const SupplyWrapper = styled.div`
  padding: 25px;
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
`

export const Tbody = styled.tbody`
  tr {
    td {
      padding: 6px 0px;
      &:first-child {
        font-weight: 400;
        font-size: 13px;
        text-align: left;
        text-transform: capitalize;
        opacity: 0.6;
      }

      &:last-child {
        font-weight: 500;
        font-size: 13px;
        text-align: right;
        text-transform: capitalize;
      }
    }
  }
`

export const BalanceWrapper = styled.p`
  text-align: right;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  margin: 5px 0px;
`
interface ActiveBoxProps {
  readonly active?: boolean
}

export const ActiveBox = styled.div<ActiveBoxProps>`
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(80.31deg, #2B2263 7.82%, #6D24E4 91.92%);
  border-radius: 0px 11px 11px 0px;
  transform: translateX(0%);
  transition: all 0.3s linear;

  ${(props: any) => props.active && css`
    transform: translateX(100%);
    background: linear-gradient(260.31deg, #2B2263 7.82%, #6D24E4 91.92%);
    border-radius: 11px 0px 0px 11px;
  `};
`

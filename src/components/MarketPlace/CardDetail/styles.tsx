import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 25px 15px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  img {
    width: 30px;
    margin-right: 15px;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin-bottom: 10px;
  }
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(38, 39, 43, 0.73);
  border-radius: 13px;
  padding: 4px 10px;
`

export const DateListWrapper = styled(MenuListWrapper)`
  overflow: auto;
`

interface MenuItemProps {
  readonly active?: boolean;
};

export const MenuItem = styled.div<MenuItemProps>`
  border-radius: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-transform: capitalize;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  margin: 0px 5px;
  background: transparent;
  
  ${(props: any) => props?.active && css`
    background: linear-gradient(442.07deg, #223663 -1.47%, #2489E4 98.47%);
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ChartWrapper = styled.div`
  flex: 1;
  margin: 0px;

  @media (min-width: 768px) {
    margin: 0px 7px;
  }
`

export const ControlPanel = styled.div`
  width: 100%;
  margin: 0px 7px;
  padding: 15px;

  @media (min-width: 400px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    max-width: 200px;
    padding: 0px;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 7px;
    font-weight: 700;
    font-size: 28px;
  }

  #select-input {
    background: linear-gradient(458deg,rgb(72 163 246 / 10%) 9.22%,rgb(23 128 224 / 10%) 83.63%);
    > div:first-child {
      padding: 5px 12px;
    }
  }
`

export const Table = styled.table`
  width: 100%;
  margin: 35px 0px;
`

export const Tbody = styled.tbody`
  tr {
    td {
      font-size: 12px;
      color:  rgb(255 255 255 / 80%);
      &:first-child {
        color: rgb(255 255 255 / 40%);
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`

export const ButtonWrapper = styled.div`

  button {
    height: 43px;
    padding: 0px 9px;
    width: 100%;
  }
`

export const FormControl = styled.div`
  margin-top: 10px;
  > span {
    font-weight: 400;
    font-size: 10px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgb(255 255 255 / 4%);
  width: 100%;
  border-radius: 11px;
  margin-top: 5px;
  height: 35px;

  input {
    flex: 1;
    border-radius: 11px;
    min-width: 10px;
    border: none;
    background: transparent;
    color: white;
    outline: none;
    font-size: 12px;
    line-height: 21px;
    font-weight: 400;
    padding: 5px 10px;
    &::placeholder {
      color: #C4C4C4;
    }
  }

  #select-input {
    background: transparent;
    #list {
      background: #1a1b1f;
    }
  }
`

export const GoldWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;

  span {
    font-weight: 500;
    font-size: 11px;
  }
  img {
    width: 17px;
    margin-right: 7px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 17px;
    margin-right: 7px;
  }
  span {
    font-weight: 500;
    font-size: 11px;
  }
`

export const Balance = styled.p`
  font-size: 12px;
  text-align: right;
`

export const ChartView = styled.div``

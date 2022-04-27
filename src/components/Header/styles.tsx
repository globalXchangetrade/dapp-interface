import styled, { css } from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1500px;
  margin: 0px auto;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 15px 30px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #C4C4C4;
  }
  span {
    margin-left: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const MenuButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(458deg, #48a3f60a 9.22%, #1780e00a 83.63%);
  padding: 4px 17px;
  border-radius: 19px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface MenuItemProps {
  readonly active: boolean;
};

export const MenuItem = styled.div<MenuItemProps>`
  border-radius: 28.9062px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-transform: capitalize;
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.2s linear;
  margin: 0px 7px;
  background: transparent;
  
  ${(props: any) => props?.active && css`
    background: linear-gradient(442.07deg, #223663 -1.47%, #2489E4 98.47%);
  `}
`

export const ChainListWrapper = styled.div`
  margin: 0px 30px;
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

export const WalletButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 38px;
  }
`

export const ActionSelectorWrapper = styled.div`
  position: relative;
  margin-left: 12px;

  > button {
    height: 38px;
    padding: 7px 5px;
    border-radius: 9px;
    svg {
      font-size: 20px;
    }
  }
`

export const DropDownList = styled.div`
  position: absolute;
  min-width: 120px;
  right: 0px;
  top: 100%;
  margin-top: 10px;
  border-radius: 8px;
  background: linear-gradient(458deg,rgb(72 163 246 / 10%) 9.22%,rgb(23 128 224 / 10%) 83.63%);
`

export const DropDownItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #ffffff08;
  }
`

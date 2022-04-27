import styled, { css } from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1500px;
  margin: 0px auto;
  padding: 15px;
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
  padding: 4px 12px;
  border-radius: 19px;

  @media (min-width: 1024px) {
    padding: 4px 17px;
  }
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

  @media (min-width: 1024px) {
    margin: 0px 4px;
  }
`

export const ChainListWrapper = styled.div`
  margin: 15px 0px;

  @media (min-width: 450px) {
    margin: 0px 10px;
  }

  @media (min-width: 993px) {
    margin: 0px 20px;
  }

  @media (min-width: 1200px) {
    margin: 0px 30px;
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

export const WalletButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 38px;
  }
`

export const ActionSelectorWrapper = styled.div`
  position: relative;
  margin-left: 8px;

  > button {
    height: 38px;
    padding: 7px 5px;
    border-radius: 9px;
    svg {
      font-size: 20px;
    }
  }

  @media (min-width: 993px) {
    margin-left: 12px;
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

export const MenuListIconWrapper = styled.div`
  button {
    width: 35px;
    height: 35px;
    padding: 0px;
    svg {
      font-size: 24px;
      width: 24px;
      fill: white;
    }
  }
  margin: 0px 10px;

  @media (min-width: 450px) {
    margin: 0px 5px;
  }
`

export const OverLay = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 40%);
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  top: 0px;
  left: 0px;
`

export const MobileMenu = styled.div`
  & > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
    font-size: 1.15em;
  }
  position: fixed;
  right: inherit;
  z-index: 1100;
  width: 0%;
  height: 100%;
  transition: all 0.5s ease 0s;
  top: 0px;
  left: 0px;
  overflow: auto;
  background: #18191d;
`;

interface MobileItemProps {
  readonly active: boolean;
};

export const MobileItem = styled.div<MobileItemProps>`
  padding: 15px 15px 15px 0px;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  & > span {
      font-weight: 500 !important;
      font-size: 16px !important;
      margin-top: 24px !important;
      margin-bottom: 24px !important;
      transition: 0.2s;
      &:hover {
        color: #2489e4ad;
      }
  }
  ${(props: any) => props?.active && css`
    > span {
      color: #2489E4;
    }
  `}
`;

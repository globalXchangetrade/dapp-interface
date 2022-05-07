import styled, { css } from 'styled-components'


export const Container = styled.div`
  margin: 15px 0px;

  @media (min-width: 576px) {
    margin: 15px;
  }

  @media (min-width: 768px) {
    margin: 15px 30px;
  }
`

export const InnerContainer = styled.div`
  background-color: rgba(200, 200, 200, 0.07);
  border-radius: 23px;
  padding: 10px 15px;
  height: 100%;

  @media (min-width: 768px) {
    padding: 16px 25px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;

  > span {
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 21px;

    > span {
      margin-left: 5px;
      color: rgba(255, 255, 255, 0.66);
      font-weight: 600;
      font-size: 12px;
      margin-top: 4px;
    }
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
    margin: 0px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 5px;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const ChartWrapper = styled.div`
  width: 150px;
  margin-right: 15px;
  position: relative;
  padding: 20px 0px;
  height: 100%;
  display: flex;
  align-items: center;

  > button {
    z-index: 999;
    position: absolute;
    right: 10px;
    top: 20px;
    width: 25px;
    height: 25px;
    padding: 0px;
  }
`

export const CardInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Table = styled.table`
  width: 100%;
  margin-bottom: 15px;
`

export const Tbody = styled.tbody`
  tr {
    td {
      font-size: 12px;
      &:first-child {
        color: rgba(255, 255, 255, 0.94);
        opacity: 0.8;
      }
      &:last-child {
        text-align: right;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.88);
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 5px;

  button {
    height: 37px;
    margin-top: 10px;
    &:first-child {
      padding: 5px 17px;
      margin-right: 6px;
      max-width: 147px;
      width: calc(100% - 44px);
    }
    &:last-child {
      width: 38px;
      padding: 5px;
    }
  }
`

export const Divider = styled.div`
  margin-left: -15px;
  width: calc(100% + 30px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.06);

  @media (min-width: 768px) {
    margin-left: -25px;
    width: calc(100% + 50px);
  }
`

export const AutherWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 12px;
    opacity: 0.86;
    margin-right: 5px;
  }
  div {
    display: flex;
    align-items: center;
    svg {
      font-size: 14px;
      opacity: 0.5;
    }
  }
`

export const AssetsWrapper = styled.div`
  > p {
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.88);
    margin: 0px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
  }
`

interface LogoWrapperProps {
  readonly inactive?: any
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  ${( props: any ) => props.inactive && css`
    background: #C4C4C4;
  `}
`

interface HeaderLogoWrapperProps {
  readonly inactive?: any
}

export const HeaderLogoWrapper = styled.div<HeaderLogoWrapperProps>`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  ${( props: any ) => props.inactive && css`
    background: #C4C4C4;
  `}
`

export const PopoverBody = styled.div`
  background: #1B1B1B;
  opacity: 0.9;
  border-radius: 6px;
  max-width: 230px;
  padding: 14px 10px;
`

export const InnerWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  
  border-top: 10px solid rgb(27 27 27 / 90%);
  bottom: -10px;
`

export const UserInfoWrapper = styled.div`
  h2 {
    font-weight: 400;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
  p {
    margin: 0px;
    font-weight: 300;
    font-size: 10px;
    max-width: 400px;
    width: 100%;
  }
`
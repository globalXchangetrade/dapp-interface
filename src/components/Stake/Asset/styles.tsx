import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 20px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: rgb(255 255 255 / 6%);
  }
`

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-transform: capitalize;
    margin-left: 15px;
  }

  svg {
    color: #5c5e60;
    margin-left: 10px;
  }
`

export const PriceChart = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 400;
  }
`

interface LogoWrapperProps {
  readonly inactive?: any
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  ${( props: any ) => props.inactive && css`
    background: #C4C4C4;
  `}
`

export const PopoverBody = styled.div``

export const ChartWrapper = styled.div`
  margin-left: 12px;
  display: flex;
  align-items: flex-end;
  > div {
    width: 5px;
    height: 13px;
    margin: 0px 2px;
    background: linear-gradient(267.62deg, #82BCEF 0.27%, #1780E0 103.16%);
    &:first-child {
      height: 6px;
      margin: 0px;
    }
    &:last-child {
      height: 9px;
      margin: 0px;
    }
  }
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent; 
  
  border-right: 10px solid rgba(255, 255, 255, 7%);
  left: -10px;
`

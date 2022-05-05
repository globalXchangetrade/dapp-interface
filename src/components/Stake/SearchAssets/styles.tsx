import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 25px;

  > h1 {
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    margin-bottom: 16px;
  }
`

export const SearchResultBoxWrapper = styled.div`
  overflow: hidden;
  margin-top: 15px;
  border-radius: 20px;
`

export const SearchResultBox = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 3%) 0%, rgba(255, 255, 255, 0) 100%);
  padding-top: 15px;
  max-height: 300px;
  overflow: auto;

  > p {
    padding: 5px 20px;
    margin: 0px;
  }
`

export const SearchItem = styled.div`
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

  > div {
    width: 40px;
    margin-left: 5px;
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

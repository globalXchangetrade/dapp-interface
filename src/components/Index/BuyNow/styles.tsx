import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 25px;
  > h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EEEEEE;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  > button {
    width: 100%;
    height: 44px;
    margin: 40px 0px 10px 0px;
  }
`;

export const FormControl = styled.div`
  margin-top: 26px;
  > label {
    font-weight: 300;
    font-size: 11px;
    margin-left: 15px;
  }
`;

export const ExchangeItem = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 6%);
  border-radius: 11px;
  height: 47px;
  padding: 5px 15px;
  margin-bottom: 10px;

  > input {
    width: 100%;
    font-size: 14px;
    outline: none;
    padding-right: 5px;
    background: transparent;
    border: none;
    color: white;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 14px;
    margin-right: 8px;
    white-space: nowrap;
  }

  svg {
    font-size: 16px;
  }
`;

interface LogoWrapperProps {
  readonly inactive?: any
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  ${( props: any ) => props.inactive && css`
    background: #C4C4C4;
  `}
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
  }
`

export const BalanceText = styled.div`
  text-align: right;
  padding-right: 25px;
  margin: 7px;
  font-weight: 400;
  font-size: 12px;
  color: #C5A0FF;
`

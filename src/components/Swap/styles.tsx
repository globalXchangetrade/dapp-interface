import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 45px 0px;
`;

export const InnerContainer = styled.div`
  max-width: 1500px;
  margin: 0px auto;
  padding: 0px 15px;

  @media (min-width: 768px) {
    padding: 0px 30px;
  }
`;

export const SwapBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwapBox = styled.div`
  background: linear-gradient(167.08deg, #111216 7.54%, #111216 56.49%);
  opacity: 0.98;
  border: 1px solid rgba(176, 176, 176, 0.17);
  box-shadow: 0px 20px 89px rgba(75, 72, 246, 0.05);
  border-radius: 32px;
  max-width: 387px;
  width: 100%;
  padding: 25px 30px;
  margin-top: 80px;

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

export const ExchangeIconGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

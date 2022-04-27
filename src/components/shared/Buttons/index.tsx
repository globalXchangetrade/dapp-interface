
import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const IconButton = styled.button`
  background: linear-gradient(458deg,rgb(72 163 246 / 10%) 9.22%,rgb(23 128 224 / 10%) 83.63%);
  border-radius: 5px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    font-size: 17px;
    color: #F3F4FA;
  }

  &:hover {
    background-position: right center; /* change the direction of the change here */
    text-decoration: none;
  }

  &:active {
  }

  ${(props: any) => props.naked && css`
    background-color: transparent;
    border-color: transparent;
    padding: 2px;
  `}
`
interface ButtonProps {
  readonly borderRadius: string;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  border: none;
  border-radius: ${(props: any) => !props.borderRadius ? '10px' : props.borderRadius};
  line-height: 20px;
  padding: 10px 17px;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props: any) => props.bgtransparent && css`
    background: transparent !important;
  `}
  ${(props: any) => props.initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
  ${(props: any) => props.outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${(props: any) => props.circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
  `}
  ${(props: any) => props.circle && props.outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
  `}

  ${({ color }) => color === 'primary' && css`
    display: flex;
    align-items: center;
    background-image: linear-gradient(442.07deg, #223663 -1.47%, #2489E4 98.47%);
    text-align: center;
    background-size: 200% auto;     
    display: block;
    color: white;
    &:hover {
      background-position: right center; /* change the direction of the change here */
      text-decoration: none;
    }
    &:active {
      background-position: right center; /* change the direction of the change here */
      text-decoration: none;
    }
    ${(props: any) => props.naked && css`
      background: transparent;
    `}
  `}
`

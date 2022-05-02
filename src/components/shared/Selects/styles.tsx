import styled, { css } from 'styled-components'

interface OptionProps {
  readonly selected: boolean;
  readonly withIcons: boolean;
};

export const Option = styled.div<OptionProps>`
  padding: 3px 5px;
  min-width: 70px;
  font-size: 13px;
  color: #C4C4C4;
  cursor: pointer;
  &:hover {
    background-color: #ffffff08;
  }
  ${props => props.selected && css`
    background-color: #16212d;
  `}
  svg {
    vertical-align: text-top;
  }
  ${({ withIcons }) => withIcons && css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0px;
      `}
    }
  `}
`

interface OptionsProps {
  readonly position: string;
};

export const Options = styled.div<OptionsProps>`
  position: absolute;
  min-width: 100%;
  background: linear-gradient(458deg,rgb(72 163 246 / 10%) 9.22%,rgb(23 128 224 / 10%) 83.63%);
  margin-top: 5px;
  z-index: 10000;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 5%);
  border-radius: 10px;
  overflow: hidden;
  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
    ${props => props.theme?.rtl && css`
      margin-right: -1px;
      margin-left: 0px;
      right: 0;
      left: initial;
    `}
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
      margin-left: -1px;
      margin-right: 0px;
      left: 0;
      right: initial;
    `}
  `}
`

export const Selected = styled.div`
  padding: 3px 12px;
  font-size: 13px;
  line-height: 17px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;
`

interface SelectProps {
  readonly disabled: boolean;
  readonly open: boolean;
};

export const Select = styled.div<SelectProps>`
  display: inline-block;
  border-radius: 10px;
  background: #26272B;
  color: #FFFFFF;
  position: relative;
  
  ${props => props.disabled && css`
    pointer-events: none;
  `}
  ${props => props.open && css`

  `}
`

export const Chevron = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  color: white;
`

export const Header = styled.div`
  flex: 1;
  svg {
    font-size: 13px;
  }
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`
export const SearchBarWrapper = styled.div`
  input {
    background: transparent;
    border: none;
  }
`

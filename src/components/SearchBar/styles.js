import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    font-size: 20px;
    color: ${props => props.theme.colors.gray};
    left: 14px;
  }

  input {
    flex: 1;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    ${props => props.theme?.isLightMode ? css`
      background: #EFF3F4;
      border: none;
    ` : css`
      background: rgba(196, 196, 196, 0.1);
    `}
    color: ${props => props.theme.colors.textPrimary};
    outline: none;
    font-size: 16px;
    line-height: 21px;
    font-weight: 600;
    padding: 9px 10px 9px 47px;
    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
  }
`

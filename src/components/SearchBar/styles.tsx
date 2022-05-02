import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    font-size: 20px;
    color: white;
    left: 14px;
  }

  input {
    flex: 1;
    border-radius: 12px;
    border: 1px solid #1a1b1f;
    background: #1a1b1f;
    color: white;
    outline: none;
    font-size: 12px;
    line-height: 21px;
    font-weight: 400;
    padding: 9px 10px 9px 47px;
    &:focus {
      border: 1px solid #141f2c;
    }
    &::placeholder {
      color: #FFFFFF;
      opacity: 0.3;
    }
  }
`

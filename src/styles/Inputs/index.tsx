import styled from 'styled-components'
import { darken } from 'polished'

interface InputProps {
  
}

export const Input = styled.input<InputProps>`
  background: rgb(255 255 255 / 6%);
  border: 1px solid transparent;
  border-radius: 11px;
  font-size: 14px;
  padding: 10px 15px;
  outline: none;
  width: 100%;
  color: white;

  &:focus {
    border-color: rgb(255 255 255 / 6%);
  }

  &::placeholder,
  &::-webkit-input-placeholder {
    color: rgb(255 255 255 / 30%);
  }
  &:-ms-input-placeholder {
    color: rgb(255 255 255 / 30%);
  }

  &:read-only {
    background-color: #F8F9FA;
    cursor: not-allowed;
    border-color: #DEE2E6;
  }
`

export const TextArea = styled.textarea`
  background: rgb(255 255 255 / 6%);
  border: 1px solid #DEE2E6;
  border-radius: 11px;
  font-size: 14px;
  padding: 10px 15px;
  outline: none;
  resize: none;
  color: white;
  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #B1BCCC;
  }
  &:-ms-input-placeholder {
    color: #B1BCCC;
  }
  &:read-only {
    background-color: #F8F9FA;
    cursor: not-allowed;
    border-color: #DEE2E6;
  }
`

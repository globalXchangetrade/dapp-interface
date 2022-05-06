import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  label {
    width: 30px;
    height: 7px;
    display:block;
    background: rgb(121 121 121 / 30%);
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 0 20px #477a8550;
  }
  label::after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    border-radius: 50%;
    top: -4px;
    transition: 0.5s;
    left: calc(100% - 16px);
    transform: translateX(-100%);
    background: #6A6A6A;
  }

  input:checked + label:after {
    background: linear-gradient(260.31deg, #2B2263 7.82%, #6D24E4 91.92%);
    left: 16px;
    transform: translateX(0%);
  }

  input:checked + label {
    background: linear-gradient(260.31deg, #2b22634d 7.82%, #6e25e44d 91.92%);
  }

  label:active:after {
    width: 18px;
  }

`

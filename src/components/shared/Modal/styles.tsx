import styled, { css } from 'styled-components'

interface ContainerProps {
  readonly zx?: number;
}
export const Container = styled.div<ContainerProps>`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

interface ModalDialogProps {
  readonly isTransparent?: boolean;
  readonly padding?: string;
  readonly height?: string;
  readonly width?: string;
  readonly borderRadius?: string;
};

export const ModalDialog = styled.div<ModalDialogProps>`
  position: relative;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' : '#111216'};
  padding: ${({ padding }) => padding || '0px'};
  width: 100vw;
  border-radius: 0px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  height: ${({ height }) => height || '100%'};;
  max-height: 100vh;
  overflow: auto;
  box-shadow: 0px 20px 99px rgba(75, 72, 246, 0.26);

  @media (min-width: 769px) {
    width: ${({ width }) => width || '50%'};
    max-height: 90vh;
    border-radius: ${(props: any) => !props.borderRadius ? '8px' : props.borderRadius};
    height: auto;
  }
`

export const ModalHeader = styled.div`
  display: flex;
`

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-transform: capitalize;
  flex: 1;
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
`
export const ModalIcon = styled.span`
  position: fixed;
  right: 15px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
  z-index: 2;
  svg{
    width: 20px;
    height: 20px;
  }

  @media(min-width: 769px){
    position: absolute;
  }
`

export const ModalBackHeader = styled.div`
  height: 50px;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`

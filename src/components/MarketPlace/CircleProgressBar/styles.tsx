import styled, { css } from 'styled-components'

interface ContainerProps {
  readonly activeColor?: string;
  readonly inactiveColor?: string;
};

export const CircleProgressBarContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  .circle-background,
  .circle-progress {
    fill: none;
  }

  .circle-background {
    stroke: #B70000;
  }

  .circle-progress {
    stroke: #6CFF6C;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  ${(props: any) => props?.activeColor && css`
    .circle-progress {
      stroke: ${props?.activeColor};
    }
  `}
  ${(props: any) => props?.inactiveColor && css`
    .circle-background {
      stroke: ${props?.inactiveColor};
    }
  `}
`
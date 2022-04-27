import styled from 'styled-components'


export const CircleProgressBarContainer = styled.div`
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
`
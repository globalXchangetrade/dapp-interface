import React from 'react'
import {
  CircleProgressBarContainer
} from './styles'

interface CircleProgressBarProps {
  sqSize: number,
  percentage: number,
  strokeWidth: number,
  inactiveColor?: string;
  activeColor?: string;
}

export const CircleProgressBar:React.FC<CircleProgressBarProps> = (props: CircleProgressBarProps) => {
  const { sqSize, percentage,  strokeWidth, inactiveColor, activeColor} = props

  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - dashArray * percentage / 100;
  return (
    <CircleProgressBarContainer activeColor={activeColor} inactiveColor={inactiveColor}>
      <svg
          width={sqSize}
          height={sqSize}
          viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`} />
          <circle
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(180 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }} />
      </svg>
    </CircleProgressBarContainer>
  )
}

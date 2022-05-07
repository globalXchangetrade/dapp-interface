import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;

  > button {
    height: 34px;
    svg {
      font-size: 16px;
      margin-left: 12px;
    }
  }
`

interface CalnedarWrapperProps {
  readonly isLeft?: boolean
}

export const CalendarWrapper = styled.div<CalnedarWrapperProps>`
  background: #1e1f22;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  margin-top: 18px;
  overflow: hidden;
  width: fit-content;
  right: 0px;
  ${({ isLeft }) => isLeft && css`
    left: 0px;
  `}
  .rdrDateRangeWrapper {
    .rdrDateDisplayWrapper {
      background-color: transparent;
    }
    .rdrDateDisplayItem {
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: none;
    }
    button {
      .rdrStartEdge,
      .rdrEndEdge,
      .rdrInRange {
        color: rgba(255, 255, 255, 0.6) !important;
      }
    }
    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: white;
    }
  }

  .rdrCalendarWrapper {
    background: #1e1f22;

    .rdrMonthPicker, .rdrYearPicker {
      select {
        color: white;
      }
    }

    .rdrNextPrevButton {
      background: rgba(247,247,247,0.11);
      i {
        border-color: transparent white transparent transparent;
      }
      &.rdrNextButton i {
          border-color: transparent transparent transparent white;
      }
    }

    .rdrDays {
      .rdrDay {
        span {
          color: white !important;
          &.rdrSelected {
            color: #6D24E4 !important;
          }
        }
        .rdrDayNumber {
          span {
            &::after {
              background: #6D24E4 !important;
            }
          }
        }
        &.rdrDayPassive {
          .rdrDayNumber {
            span {
              color: rgb(132, 144, 149) !important;
            }
          }
        }
      }
    }
  }
`

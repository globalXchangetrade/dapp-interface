import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import { DateRange, Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Calendar as DateIcon } from '../SvgIcons'
import { Button } from '../../../styles'
import { Container, CalendarWrapper } from './styles'

interface RangeCalendarProps {
  handleChangeDate?: any,
  defaultValue?: any,
  isLeft?: boolean,
  isSingleDate?: boolean,
  withTime?: boolean
}

export const RangeCalendar:React.FC<RangeCalendarProps> = (props: RangeCalendarProps) => {
  const {
    handleChangeDate,
    defaultValue,
    isLeft,
    isSingleDate,
    withTime
  } = props

  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [date, setDate] = useState<any>(null)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const calendarRef = useRef<any>()

  const handleClickOutside = (e: any) => {
    if (!isShowCalendar) return
    const outsideCalendar = !(calendarRef.current?.contains(e.target) || e.target.closest('.ordering-calendar-btn'))
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  const handleOpenCalendar = (evt: any) => {
    setIsShowCalendar(true)
  }

  const handleChangeSingleDate = (dateTime: any) => {
    const dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
    handleChangeDate && handleChangeDate(moment(dateTime).format(dateFormat))

    setDate(dateTime)
  }

  const handleChangeDates = (item: any) => {
    if (item.selection?.startDate && item.selection?.endDate) {
      const dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'
      handleChangeDate(moment(item.selection.startDate).format(dateFormat), moment(item.selection.endDate).format(dateFormat))
    }

    setDateRange([item.selection])
  }

  const rangeFormat = (date1: any, date2: any) => {
    let formattedDate = `${moment(date1).format('YYYY-MM-DD')}~${moment(date2).format('YYYY-MM-DD')}`
    if (moment(date1).format('YYYY') === moment(date2).format('YYYY')) {
      if (moment(date1).format('MM') === moment(date2).format('MM')) formattedDate = `${moment(date1).format('DD')} - ${moment(date2).format('DD')} ${moment(date2).format('MMM')}, ${moment(date1).format('YYYY')}`
      else formattedDate = `${moment(date1).format('MM-DD')} ~ ${moment(date2).format('MM-DD')}, ${moment(date1).format('YYYY')}`
    }
    return formattedDate
  }

  const dateFormat = (dateTime: any) => {
    return `${moment(dateTime).format('DD')} ${moment(dateTime).format('MMM')}, ${moment(dateTime).format('YYYY')}`
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (isSingleDate && defaultValue) {
      setDate(new Date(defaultValue))
      return
    }

    if (defaultValue && defaultValue?.from !== '' && defaultValue?.to !== '') {
      setDateRange([
        {
          startDate: new Date(defaultValue?.from),
          endDate: new Date(defaultValue?.to),
          key: 'selection'
        }
      ])
    }
  }, [])

  return (
    <Container>
      <Button
        onClick={handleOpenCalendar}
        borderRadius='8px'
        bgtransparent={true}
        className='ordering-calendar-btn'
      >
        {!isSingleDate && (dateRange[0].startDate ? rangeFormat(dateRange[0].startDate, dateRange[0].endDate) : 'Select Date Range')}
        {isSingleDate && (date ? dateFormat(date) : 'Select a Date')}
        <DateIcon />
      </Button>
      {
        isShowCalendar && (
          <CalendarWrapper ref={calendarRef} isLeft={isLeft}>
            {isSingleDate ? (
              <Calendar
                date={date}
                onChange={(date: any) => handleChangeSingleDate(date)}
              />
            ) : (
              <DateRange
                editableDateInputs
                onChange={(item: any) => handleChangeDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            )}
          </CalendarWrapper>
        )
      }
    </Container>
  )
}

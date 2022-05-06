import React, { useEffect, useState } from 'react'
import { DownArrow } from '../../components/shared/SvgIcons'
import { SearchBar } from '../../components/shared'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  Header,
  SearchBarWrapper
} from './styles'

export const Select = (props: any) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    notReload,
    notSelected,

    searchValue,
    handleChangeSearch,
    searchBarPlaceholder
  } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find((option: any) => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = React.useRef<HTMLDivElement>(null);
  const isOneOption = options?.length === 1;
  const handleSelectClick = (e: any) => {
    !open && setOpen(true)
  }

  const closeSelect = (e: any) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mouseup', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find((option: any) => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  const handleChangeOption = (option: any) => {
    if (!notSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
    setOpen(false)
  }

  return (
    isOneOption ? (
        <SelectInput
          disabled={false}
          open={false}
        >
          <Selected>
            <Header>
            {options[0].content}
            </Header>
          </Selected>
        </SelectInput>
    ):(
        <SelectInput
          id='select-input'
          disabled={!notReload}
          open={false}
          onClick={handleSelectClick}
        >
          {!selectedOption && (
            <Selected>
              {placeholder || ''}
              <Chevron className='select-arrow'>
                <DownArrow />
              </Chevron>
            </Selected>
          )}
          {selectedOption && (
            <Selected>
              <Header>
                {selectedOption.showOnSelected || selectedOption.content}
              </Header>
              <Chevron className='select-arrow'>
                <DownArrow />
              </Chevron>
            </Selected>
          )}
          {open && options && (
            <Options id='list' position='right' ref={dropdownReference}>
              {handleChangeSearch && (
                <SearchBarWrapper>
                  <SearchBar
                    lazyLoad
                    search={searchValue}
                    onSearch={handleChangeSearch}
                    placeholder={searchBarPlaceholder || 'Search...'}
                  />
                </SearchBarWrapper>
              )}
              {
                options.map((option: any) => (
                  <Option
                    className='item'
                    key={option.value}
                    selected={value === option.value}
                    onClick={() => handleChangeOption(option)}
                    withIcons={false}
                  >
                    {option.content}
                  </Option>
                ))
              }
            </Options>
          )}
        </SelectInput>
    )
  )
}

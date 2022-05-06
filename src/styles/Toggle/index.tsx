import React, { useState, useEffect } from 'react'
import {
  Container
} from './styles'

interface ToggleProps {
  label?: any,
  defaultChecked?: any,
  className?: string,
  onChange?: any,
  notAsync?: boolean
}

export const Toggle:React.FC<ToggleProps> = (props: ToggleProps) => {
  const { label, defaultChecked, className, onChange, notAsync } = props

  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(defaultChecked)
  }, [defaultChecked])

  const handleCheckBoxChange = (evt: any) => {
    if (!notAsync) {
      setChecked(evt.target.checked)
    }
    onChange && onChange(evt.target.checked)
  }

  return (
    <Container className={className}>
      <input
        type='checkbox'
        name='switch'
        checked={checked}
        onChange={handleCheckBoxChange}
        id={label || 'switch'}
      />
      <label htmlFor={label || 'switch'} />
    </Container>
  )
}
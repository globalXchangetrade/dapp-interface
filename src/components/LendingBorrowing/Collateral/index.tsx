import React from 'react'
import { Button } from '../../shared'
import {
  Container,
  Table,
  Tbody
} from './styles'

interface CollateralProps {
  openBorrowRepay: any
}

export const Collateral:React.FC<CollateralProps> = (props: CollateralProps) => {
  const { openBorrowRepay } = props

  return (
    <Container>
      <p>Enable GOLD token as collateral</p>
      <p>Increase your borrow limit form $0 to $50,523 by enabling GOLD as collateral</p>
      <Table>
        <Tbody>
          <tr>
            <td>Borrow Limit</td>
            <td>$600 → $600</td>
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            <td>Borrow Limit Used</td>
            <td>0%</td>
          </tr>
        </Tbody>
      </Table>
      <Button
        color='primary'
        onClick={() => openBorrowRepay()}
      >
      USE GOLD AS COLLATERAL
      </Button>
    </Container>
  )
}

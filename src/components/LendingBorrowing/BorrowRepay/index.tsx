import React, { useState } from 'react'
import { Button } from '../../shared'
import {
  Container,
  Title,
  AmountWrapper,
  InputWrapper,
  Tabs,
  Tab,
  SupplyWrapper,
  Table,
  Tbody,
  BalanceWrapper
} from './styles'

interface BorrowRepayProps {
  market?: any,
  handleChangeBorrow?: any
}

export const BorrowRepay:React.FC<BorrowRepayProps> = (props: BorrowRepayProps) => {
  const { market, handleChangeBorrow } = props

  const [max, setMax] = useState<any>(0)
  const [selectedTab, setSelectedTab] = useState<string>('borrow')

  const tabList = [
    { key: 'borrow', name: 'Borrow' },
    { key: 'repay', name: 'repay' }
  ]

  return (
    <Container>
      <Title>
        <img src={market?.photo} alt='' />
        <span>{market?.name}</span>
      </Title>
      <AmountWrapper>
        <InputWrapper>
          <input
            type='text'
            value={max}
            onChange={(e: any) => setMax(e.target.value)}
            placeholder='Amount'
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
          <span>MAX</span>
        </InputWrapper>
      </AmountWrapper>
      <Tabs>
        {tabList.map((item, i) => (
          <Tab
            key={i}
            active={item.key === selectedTab}
            onClick={() => setSelectedTab(item.key)}
          >
            <span>{item.name}</span>
          </Tab>
        ))}
      </Tabs>
      {selectedTab === 'borrow' && (
        <SupplyWrapper>
          <Table>
            <Tbody>
              <tr>
                <td>Borrow rate</td>
                <td>8%</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit</td>
                <td>$600 USD</td>
              </tr>
            </Tbody>
            <Tbody>
              <tr>
                <td>Borrow Limit Used</td>
                <td>$20 USD</td>
              </tr>
            </Tbody>
          </Table>
          <Button
            color='primary'
            onClick={() => handleChangeBorrow(true)}
          >
            BORROW
          </Button>
          <BalanceWrapper>Wallet Balance: 3,823</BalanceWrapper>
        </SupplyWrapper>
      )}
      {selectedTab === 'repay' && (
        <SupplyWrapper>
          <Table>
            <Tbody>
              <tr>
                <td>Supply rate</td>
                <td>8%</td>
              </tr>
            </Tbody>
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
          >
            REPAY
          </Button>
          <BalanceWrapper>Wallet Balance: 3,823</BalanceWrapper>
        </SupplyWrapper>
      )}
      
    </Container>
  )
}

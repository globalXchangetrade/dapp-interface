import React from 'react';
import { Button } from '../../shared';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  AssetsWrapper
} from './styles';

export const BorrowMarket:React.FC = () => {
  const dumy = [
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, Liquidity: '1.23M' },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, Liquidity: '1.23M' },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, Liquidity: '1.23M' },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, Liquidity: '1.23M' }
  ]

  return (
    <Container>
      <h1>borrow market</h1>
      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <th>assets</th>
              <th>apy</th>
              <th>wallet</th>
              <th>Liquidity</th>
            </tr>
          </Thead>
          {dumy.map((item, i) => (
            <Tbody key={i} activeColor={i%2 === 0}>
              <tr>
                <td>
                  <AssetsWrapper>
                    <img src={item.photo} alt='' />
                    <span>{item?.name}</span>
                  </AssetsWrapper>
                </td>
                <td>{item.apy}</td>
                <td>{item.wallet}</td>
                <td>{item.Liquidity}</td>
              </tr>
            </Tbody>
          ))}
        </Table>
      </TableWrapper>
    </Container>
  )
};
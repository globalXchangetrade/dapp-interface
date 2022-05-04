import React from 'react';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  AssetsWrapper,
  TableInnerWrapper
} from './styles';

export const Borrowed:React.FC = () => {
  const dumy = [
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, limit_percent: 24 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, limit_percent: 24 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, limit_percent: 24 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300, limit_percent: 24 }
  ]

  return (
    <Container>
      <h1>Borrowed</h1>
      <TableWrapper>
        <TableInnerWrapper>
          <Table>
            <Thead>
              <tr>
                <th>Assets</th>
                <th>Apy</th>
                <th>Wallet</th>
                <th>% of Limit</th>
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
                  <td>{item.limit_percent}%</td>
                </tr>
              </Tbody>
            ))}
          </Table>
        </TableInnerWrapper>

      </TableWrapper>
    </Container>
  )
};
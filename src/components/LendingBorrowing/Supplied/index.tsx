import React from 'react';
import { Toggle } from '../../../styles';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  AssetsWrapper,
  TableInnerWrapper
} from './styles';

export const Supplied:React.FC = () => {
  const dumy = [
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 }
  ];

  return (
    <>
      <Container>
        <h1>Supplied</h1>
        <TableWrapper>
          <TableInnerWrapper>
            <Table>
              <Thead>
                <tr>
                  <th>Assets</th>
                  <th>Apy</th>
                  <th>Balance</th>
                  <th>Collateral</th>
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
                    <td>
                      <Toggle
                        label={i}
                        defaultChecked={true}
                      />
                    </td>
                  </tr>
                </Tbody>
              ))}
            </Table>
          </TableInnerWrapper>

        </TableWrapper>
      </Container>
    </>

  )
};
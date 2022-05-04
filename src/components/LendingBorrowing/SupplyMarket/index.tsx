import React, { useState } from 'react';
import { Button, Modal } from '../../shared';
import { Collateral } from '../Collateral';
import { SupplyForm } from '../SupplyForm';
import {
  Container,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  AssetsWrapper
} from './styles';

interface SupplyMarketProps {
  handleChangeSupply: any
}

export const SupplyMarket:React.FC<SupplyMarketProps> = (props: SupplyMarketProps) => {
  const { handleChangeSupply } = props

  const dumy = [
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 },
    { photo: '/imgs/gold.png', name: 'Gold', apy: 23, wallet: 300 }
  ]

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isCollateralModal, setIsCollateralModal] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<any>()

  const handleClickButton = (item: any) => {
    setIsModalOpen(true)
    setSelectedItem(item)
  }

  return (
    <>
      <Container>
        <h1>supply market</h1>
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <th>assets</th>
                <th>apy</th>
                <th>wallet</th>
                <th></th>
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
                    <Button
                      color='primary'
                      naked
                      onClick={() => handleClickButton(item)}
                    >
                      Supply
                    </Button>
                  </td>
                </tr>
              </Tbody>
            ))}
          </Table>
        </TableWrapper>
      </Container>
      <Modal
        width='381px'
        open={isModalOpen}
        borderRadius='43px'
        onClose={() => setIsModalOpen(false)}
      >
        <SupplyForm
          market={selectedItem}
          handleChangeSupply={handleChangeSupply}
          setIsCollateralModal={setIsCollateralModal}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
      <Modal
        width='381px'
        open={isCollateralModal}
        borderRadius='43px'
        onClose={() => setIsCollateralModal(false)}
      >
        <Collateral />
      </Modal>
    </>

  )
};
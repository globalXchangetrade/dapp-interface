import React, { useState } from 'react';
import { Button } from '../../styles';
import { Modal } from '../shared';
import { Plus } from '../shared/SvgIcons';
import { Card } from './Card';
import { SearchAssets } from './SearchAssets';
import { StakeForm } from './StakeForm';
import {
  Container,
  InnerContainer,
  ContentHeader,
  PositionListWrapper,
  EmptyPosition
} from './styles';

export const Stake:React.FC = () => {
  const [positionList, setPositionList] = useState<any>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<any>();

  const handleAddPositionList = (item: any) => {
    const _positionList = positionList.filter((position: any): any => position.id !== item.id);
    _positionList.push(item);
    setPositionList(_positionList);
    setOpenModal(false);
    setSelectedAsset(null);
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <ContentHeader>
            <h2>Pools overview</h2>
            <Button
              color='primary'
              initialIcon
              onClick={() => setOpenModal(true)}
            >
              <Plus />
              <span>New Position</span>
            </Button>
          </ContentHeader>
          {positionList?.length > 0 && (
            <PositionListWrapper>
              {positionList.map((item: any, i: number) => (
                <Card
                  key={i}
                  position={item}
                />
              ))}
            </PositionListWrapper>
          )}
          {positionList?.length === 0 && (
            <EmptyPosition>
              <p>Your active liquidity position will be dispaly here</p>
            </EmptyPosition>
          )}
        </InnerContainer>
      </Container>
      <Modal
        width='395px'
        open={openModal}
        borderRadius='43px'
        borderColor='rgba(176, 176, 176, 0.17)'
        onClose={() => setOpenModal(false)}
        noOverflow
      >
        {selectedAsset ? (
          <StakeForm
            position={selectedAsset}
            handleAddPositionList={handleAddPositionList}
          />
        ) : (
          <SearchAssets
            setSelectedAsset={setSelectedAsset}
          />
        )}
      </Modal>
    </>
  )
};

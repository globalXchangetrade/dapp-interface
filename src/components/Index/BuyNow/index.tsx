import React, { useState } from 'react';
import { Button } from '../../../styles';
import { Modal } from '../../shared';
import { DownArrow } from '../../shared/SvgIcons';
import { SearchAssets } from '../../Stake/SearchAssets';
import {
  Container,
  FormControl,
  ExchangeItem,
  SelectWrapper,
  LogoWrapper,
  TitleWrapper,
  BalanceText
} from './styles';

interface BuyNowProps {
  card?: any;
  onClose?: any;
};

export const BuyNow:React.FC<BuyNowProps> = (props: BuyNowProps) => {
  const { card, onClose } = props;

  const [to, setTo] = useState<any>({});
  const [open, setOpen] = useState(false);

  const handleBuy = () => {
    // connecting wallet code here
    onClose && onClose();
  };

  const handleChangeTo = (evt: any) => {
    const chain = { ...to, price: evt.target.value };
    setTo(chain);
  };

  const handleSelectAsset = (item: any) => {
    setTo(item);
    setOpen(false);
  };

  const handleChangeCurrentIndex = (index: string) => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <LogoWrapper inactive={!card?.logo}>
            {card?.logo && <img src={card?.logo} alt='' />}
          </LogoWrapper>
          <span>{card?.title}</span>
        </TitleWrapper>
        <FormControl>
          <label>Purchase</label>
          <ExchangeItem>
            <input
              placeholder='0.0'
              defaultValue={card?.price || ''}
              readOnly
            />
            <SelectWrapper>
              <LogoWrapper inactive={!card?.logo}>
                {card?.logo && <img src={card?.logo} alt='' />}
              </LogoWrapper>
              <span>TGI</span>
            </SelectWrapper>
          </ExchangeItem>
        </FormControl>
        <FormControl>
          <label>Payment Currency</label>
          <ExchangeItem>
            <input
              placeholder='0.0'
              value={to?.price || ''}
              readOnly
              onChange={handleChangeTo}
            />
            <SelectWrapper onClick={() => handleChangeCurrentIndex('to')}>
              {Object.keys(to).length > 0 ? (
                <>
                  <LogoWrapper inactive={!to?.logo}>
                    {to?.logo && <img src={to?.logo} alt='' />}
                  </LogoWrapper>
                  <span>{to?.name}</span>
                </>
              ) : (
                <span>Select on Asset</span>
              )}
              <DownArrow />
            </SelectWrapper>
          </ExchangeItem>
        </FormControl>
        <BalanceText>Balance : $3,823</BalanceText>
        <Button
          color='primary'
          onClick={handleBuy}
        >
          Buy Now
        </Button>
      </Container>
      <Modal
        width='395px'
        open={open}
        borderRadius='43px'
        borderColor='rgba(176, 176, 176, 0.17)'
        onClose={() => setOpen(false)}
        noOverflow
      >
        <SearchAssets
          setSelectedAsset={handleSelectAsset}
        />
      </Modal>
    </>
  )
};

import React, { useState } from 'react';
import { Button, IconButton } from '../../styles';
import { FilterGroup, Modal } from '../shared';
import { DownArrow, LongArrowDown, LongArrowUp } from '../shared/SvgIcons';
import { SearchAssets } from '../Stake/SearchAssets';
import {
  Container,
  InnerContainer,
  SwapBoxWrapper,
  SwapBox,
  FormControl,
  ExchangeItem,
  SelectWrapper,
  ExchangeIconGroup,
  LogoWrapper
} from './styles';

export const Swap:React.FC = () => {
  const [from, setFrom] = useState<any>({});
  const [to, setTo] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<string>('')

  const connectWallet = () => {
    // connecting wallet code here
  };

  const handleChangeFrom = (evt: any) => {
    const chain = { ...from, price: evt.target.value };
    setFrom(chain);
  };

  const handleChangeTo = (evt: any) => {
    const chain = { ...to, price: evt.target.value };
    setTo(chain);
  };

  const exchange = () => {
    let _from = {...from};
    let _to = {...to};
    [_from, _to] = [_to, _from]
    setFrom(_from);
    setTo(_to);
  };

  const handleSelectAsset = (item: any) => {
    if (currentIndex === 'from') setFrom(item);
    if (currentIndex === 'to') setTo(item);
    setCurrentIndex('');
    setOpen(false);
  };

  const handleChangeCurrentIndex = (index: string) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <FilterGroup />
          <SwapBoxWrapper>
            <SwapBox>
              <h1>SWAP</h1>
              <FormControl>
                <label>From</label>
                <ExchangeItem>
                  <input
                    placeholder='0.0'
                    value={from?.price || ''}
                    readOnly
                    onChange={handleChangeFrom}
                  />
                  <SelectWrapper onClick={() => handleChangeCurrentIndex('from')}>
                    {Object.keys(from).length > 0 ? (
                      <>
                        <LogoWrapper inactive={!from?.logo}>
                          {from?.logo && <img src={from?.logo} alt='' />}
                        </LogoWrapper>
                        <span>{from?.name}</span>
                      </>
                    ) : (
                      <span>Select on Asset</span>
                    )}
                    <DownArrow />
                  </SelectWrapper>
                </ExchangeItem>
              </FormControl>
              <ExchangeIconGroup>
                <IconButton
                  bgTransparent
                  onClick={exchange}
                >
                  <LongArrowDown />
                  <LongArrowUp />
                </IconButton>
              </ExchangeIconGroup>
              <FormControl>
                <label>To</label>
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
              <Button
                color='primary'
                onClick={connectWallet}
              >
                CONNECT WALLET
              </Button>
            </SwapBox>
          </SwapBoxWrapper>
        </InnerContainer>
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

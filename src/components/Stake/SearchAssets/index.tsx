import React, { useEffect, useState } from 'react';
import { Input } from '../../../styles';
import { Asset } from '../Asset';
import {
  Container,
  SearchResultBox,
  SearchResultBoxWrapper
} from './styles';

interface SearchAssetsProps {
  setSelectedAsset?: any
};

export const SearchAssets:React.FC<SearchAssetsProps> = (props: SearchAssetsProps) => {
  const { setSelectedAsset } = props;

  const [value, setValue] = useState<string>('');
  const [pairList, setPairList] = useState<any>([]);

  const dumyPairList: any = [
    { id: 1, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 1300, currency: 'USD', tvl: '24M', volume_24: '24M', change: -45, high: '24M', low: '24M', volume_7: '24M' },
    { id: 2, logo: '/imgs/dex.png', name: 'DEX/STIR', price: 1.3, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 3, logo: '/imgs/gold.png', name: 'GOLD/STIR', price: 2.5, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 4, logo: '/imgs/t.png', name: 'TERR/STIR', price: 245, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 5, logo: '/imgs/nickel.png', name: 'NICKEL/STIR', price: 123, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 6, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 7, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 8, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: -23, high: '24M', low: '24M', volume_7: '24M' },
    { id: 9, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 10, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' },
    { id: 11, logo: '/imgs/eth.png', name: 'ETH/STIR', price: 0, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' }
  ];

  const handleChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleChangeAsset = (item: any) => {
    setSelectedAsset(item);
  }

  const stakePoolList = [
    { id: 1, logo: '', name: 'ETH/STIR', price: 1400, currency: 'USD', tvl: '24M', volume_24: '24M', change: -51, high: '24M', low: '24M', volume_7: '24M' },
    { id: 2, logo: '', name: 'ETH/STIR', price: 123, currency: 'USD', tvl: '24M', volume_24: '24M', change: 24, high: '24M', low: '24M', volume_7: '24M' }
  ];

  useEffect(() => {
    setPairList(dumyPairList);
  }, []);

  useEffect(() => {
    const updatedList: any = dumyPairList.filter((item: any): any => item?.name?.toLowerCase().includes(value?.toLowerCase()));
    setPairList(updatedList);
  }, [value]);

  return (
    <Container>
      <h1>Select an Asset</h1>
      <Input
        value={value}
        onChange={(e) => handleChangeValue(e)}
        placeholder='Search name or Paste address'
      />
      <SearchResultBoxWrapper>
        <SearchResultBox>
          <p>Single sided Staking pool</p>
          {
            stakePoolList.map((item, i) => (
              <Asset chain={item} key={i} handleChangeAsset={handleChangeAsset} />
            ))
          }
          <p>Pairs</p>
          {
            pairList?.length > 0 && pairList.map((item: any, i: number) => (
              <Asset chain={item} key={i} handleChangeAsset={handleChangeAsset} />
            ))
          }
        </SearchResultBox>
      </SearchResultBoxWrapper>
    </Container>
  )
}

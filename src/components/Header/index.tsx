import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, IconButton, Select } from '../shared'
import ethIcon from '../../assets/icons/eth-icon.png'
import { useWindowSize } from '../../hooks/useWindowsSize'
import { List } from '../shared/SvgIcons'

import {
  Container,
  InnerContainer,
  LogoWrapper,
  MenuListWrapper,
  ButtonWrapper,
  MenuButtonWrapper,
  MenuItem,
  ChainListWrapper,
  Option,
  WalletButtonWrapper,
  MenuListIconWrapper,
  MobileMenu,
  OverLay,
  MobileItem
} from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { width } = useWindowSize()

  const [selectedToken, setSelectedToken] = useState('ethereum')
  const [open, setIsOpen] = useState(false)

  const menuList = [
    { path: '/swap', title: 'Swap' },
    { path: '/market-place', title: 'Marketplace' },
    { path: '/lending-borrowing', title: 'Lending Borrowing' },
    { path: '/option', title: 'Option' },
    { path: '/index', title: 'Index' },
    { path: '/portfolio', title: 'portfolio' }
  ]

  const tokenOptions = [
    { value: 'ethereum', content: <Option><img src={ethIcon} alt='' /><span className='token'>Ethereum</span></Option> },
    { value: 'bitcoin', content: <Option><img src={ethIcon} alt='' /><span className='token'>Bitcoin</span></Option> }
  ]

  const handleGoToPage = (index: string) => {
    navigate(index)
    if (open) setIsOpen(false)
  }

  return (
    <>
      <Container>
        <InnerContainer>
          <LogoWrapper>
            <div />
            {width > 300 && <span>Logo</span>}
          </LogoWrapper>
          <MenuButtonWrapper>
            {width > 1030 ? (
              <MenuListWrapper>
                {menuList.map((menu, i) => (
                  <MenuItem
                    key={i}
                    active={pathname.includes(menu.path)}
                    onClick={() => handleGoToPage(menu.path)}
                  >
                    {menu.title}
                  </MenuItem>
                ))}
              </MenuListWrapper>
            ) : (
              <MenuListIconWrapper>
                <IconButton onClick={() => setIsOpen(true)}>
                  <List />
                </IconButton>
              </MenuListIconWrapper>
            )}
            <ButtonWrapper>
              {width > 450 && (
                <ChainListWrapper>
                  <Select
                    notReload
                    placeholder='Select token'
                    options={tokenOptions}
                    defaultValue={selectedToken}
                    onChange={(val: string) => setSelectedToken(val)}
                  />
                </ChainListWrapper>
              )}
              <WalletButtonWrapper>
                <Button
                  color='primary'
                  borderRadius='13px'
                >Connect Wallet</Button>
              </WalletButtonWrapper>
            </ButtonWrapper>
          </MenuButtonWrapper>
        </InnerContainer>
      </Container>
      {width < 1030 && (
        <MobileMenu style={{ width: open ? '75%' : '0px' }}>
          <div>
            <LogoWrapper>
              <div />
              <span>Logo</span>
            </LogoWrapper>
            {menuList.map((menu, i) => (
              <MobileItem key={i} onClick={() => handleGoToPage(menu.path)} active={pathname.includes(menu.path)}>
                <span>{menu.title}</span>
              </MobileItem>
            ))}
            {width < 450 && (
              <ChainListWrapper>
                <Select
                  notReload
                  placeholder='Select token'
                  options={tokenOptions}
                  defaultValue={selectedToken}
                  onChange={(val: string) => setSelectedToken(val)}
                />
              </ChainListWrapper>
            )}
          </div>
        </MobileMenu>
      )}
      {open && width < 1030 && (
        <OverLay onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

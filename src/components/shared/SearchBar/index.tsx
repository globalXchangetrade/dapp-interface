import React, { useEffect } from 'react';
import { SearchContainer } from './styles';
import { Search } from '../SvgIcons';

export const SearchBar = (props: any) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad
  } = props;

  let timeout: any = null;
  let previousSearch: any;
  const el = React.useRef<any>(null);

  const onChangeSearch = (e: any) => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      onSearch(e.target.value)
    }, 750);

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  })

  useEffect(() => {
    if (!search) {
      el.current.value = '';
    }
  }, [search])

  return (
    <SearchContainer>
      <Search />
      <input
        type='text'
        ref={el}
        name='search'
        placeholder={placeholder}
        autoComplete='off'
      />
    </SearchContainer>
  )
}

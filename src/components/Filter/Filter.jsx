import React from 'react';
import { FilterContainer, Label, Input } from './Filter.styled';
import TextField from '@mui/material/TextField';

const Filter = ({value, changeFilter}) => {
  
  return (
  <FilterContainer>
    <Label >Поиск контактов по имени</Label>
    <TextField  type="text" value={value}  onChange={changeFilter} sx={{mb:5}} />
  </FilterContainer>)
};

export default Filter;

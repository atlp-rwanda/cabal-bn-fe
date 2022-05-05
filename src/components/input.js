/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, styled } from '@mui/material';

const StyledInputs = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: 280,
    height: 20,
    margin: '30px 0px',
  },
  width: 350,
  height: 50,
  margin: '20px 0px',
}));
const InputField = (props) => (
  <StyledInputs
    {...props}
    sx={{
      '& .MuiFormLabel-root': {
        color: '#00095E',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#00095E',
      },
      '& .MuiInputBase-root': {
        color: '#00095E',
        '& fieldset': {
          borderColor: '#00095E',
        },

        '&.Mui-focused fieldset': {
          borderColor: '#00095E',
        },
      },
      '&.Mui-focused .MuiInputBase-root': {
        color: '#00095E',
      },
    }}
  />
);
export default InputField;
